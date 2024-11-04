const BotaoLimparCarrinho = document.querySelector("#limpar-carrinho")
const iconeNotificacao = document.querySelector("#icone-notificacao")
const total = document.querySelector("#total-valor")
BotaoLimparCarrinho.addEventListener("click", () => { 
    localStorage.clear()
    exibirCarrinho()
    localStorage.setItem("carrinhoNotificacao", "false")
    iconeNotificacao.style.display = "none"
})

    
// Função para remover item do carrinho
function removerItemCarrinho(indice) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.splice(indice, 1); // Remove o item pelo índice
    localStorage.setItem("carrinho", JSON.stringify(carrinho)); // Atualiza o localStorage
    exibirCarrinho(); // Atualiza a exibição do carrinho
}
// Função de adicionar produto ao localStorage
function adicionarAoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []; // Pega o carrinho ou cria um vazio
    carrinho.push(produto); // Adiciona o produto ao carrinho
    localStorage.setItem("carrinho", JSON.stringify(carrinho)); // Salva o carrinho atualizado
    localStorage.setItem("carrinhoNotificacao", "true"); // Define a notificação como ativa
    iconeNotificacao.style.display = "block"
    verificarNotificacaoCarrinho();
}
// Seleciona o elemento onde o carrinho será exibido
const carrinhoDisplay = document.querySelector("#carrinho-display"); // O elemento HTML onde o carrinho será exibido

function exibirCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let valorTotal = 0;
    carrinhoDisplay.innerHTML = "";

    function formatarPreco(preco) {
        return parseFloat(preco.replace("R$", "").replace(",", "."));
    }

    carrinho.forEach((item, indice) => {
        const itemElemento = document.createElement("div");
        itemElemento.classList.add("item-carrinho");

        let precoItem = 0;
        if (item.tipo === "Bolo Simples" || item.tipo === "Bolo Decorado") {
            precoItem = formatarPreco(item.preco);
        } else if (item.tipo === "Doce") {
            precoItem = parseFloat(item.total) || 0;
        }

        if (item.tipo === "Bolo Simples") {
            itemElemento.innerHTML = `
            <h3>${item.tipo}</h3>
            <p><strong>Formato:</strong> ${item.formato}</p>
            <p><strong>Massa:</strong> ${item.massa}</p>
            <p><strong>Cobertura:</strong> ${item.cobertura}</p>
            <p><strong>Preço:</strong> ${item.preco}</p>
            <p><img src="${item.caminhoImagem}" alt="${item.tipo}" width="100"></p>
            <button class="excluir-item" data-indice="${indice}">Excluir item</button>
            `;
            valorTotal += precoItem;
        }

        if (item.tipo === "Bolo Decorado") {
            itemElemento.innerHTML = `
            <h3>${item.tipo}</h3>
            <p><strong>Formato:</strong> ${item.formato}</p>
            <p><strong>Massa:</strong> ${item.massa}</p>
            <p><strong>Recheio:</strong> ${item.cobertura}</p>
            <p><strong>Preço:</strong> ${item.preco}</p>
            <p><strong>Decoração:</strong> ${item.decoracao.descricao || 'Nenhuma descrição'}</p>
            <p><strong>Arquivo:</strong> ${item.decoracao.arquivo || 'Nenhum arquivo'}</p>
            <p><img src="${item.caminhoImagem}" alt="${item.tipo}" width="100"></p>
            <button class="excluir-item" data-indice="${indice}">Excluir item</button>
            `;
            valorTotal += precoItem;
        }

        if (item.tipo === "Doce") {
            itemElemento.innerHTML = `
            <h3>${item.tipo}</h3>
            <p><strong>Sabor:</strong> ${item.saborDoce}</p>
            <p><strong>Quantidade:</strong> ${item.quantidade}</p>
            <p><strong>Preço:</strong>  ${item.total}</p>
            <p><img src="${item.caminhoImagem}" alt="${item.tipo}" width="100"></p>
            <button class="excluir-item" data-indice="${indice}">Excluir item</button>
            `;
            valorTotal += precoItem;
        }

        // Adiciona o item ao display do carrinho
        carrinhoDisplay.appendChild(itemElemento);

        // Adiciona o evento de clique ao botão de exclusão
        const botaoExcluir = itemElemento.querySelector(".excluir-item");
        botaoExcluir.addEventListener("click", () => {
            removerItemCarrinho(indice); // Passa o índice para a função de remoção
        });
    });

    // Atualiza o valor total com "R$" e duas casas decimais
    total.textContent = ` ${valorTotal.toFixed(2)}`;
}




// Chama a função para exibir o carrinho ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    exibirCarrinho()
});
