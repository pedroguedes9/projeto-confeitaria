const BotaoLimparCarrinho = document.querySelector("#limpar-carrinho")
const iconeNotificacao = document.querySelector("#icone-notificacao")
BotaoLimparCarrinho.addEventListener("click", () => { 
    localStorage.clear()
    exibirCarrinho()
    localStorage.setItem("carrinhoNotificacao", "false")
    iconeNotificacao.style.display = "none"
})
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
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []; // Pega o carrinho do localStorage ou cria vazio

    // Limpa o conteúdo atual do carrinho antes de exibir
    carrinhoDisplay.innerHTML = "";

    // Loop pelos itens do carrinho e exibe cada um
    carrinho.forEach(item => {
        const itemElemento = document.createElement("div");
        itemElemento.classList.add("item-carrinho");

        if(item.tipo == "Bolo Simples"){
            itemElemento.innerHTML = `
            <h3>${item.tipo}</h3>
            <p>Formato: ${item.formato}</p>
            <p>Massa: ${item.massa}</p>
            <p>Cobertura: ${item.cobertura}</p>
            <p>Preço: ${item.preco}</p>
            <p>Imagem: <img src="${item.caminhoImagem}" alt="${item.tipo}" width="100"></p>
        `;
        }

        if(item.tipo == "Bolo Decorado"){
            itemElemento.innerHTML = `
            <h3>${item.tipo}</h3>
            <p>Formato: ${item.formato}</p>
            <p>Massa: ${item.massa}</p>
            <p>Recheio: ${item.cobertura}</p>
            <p>Preço: ${item.preco}</p>
            <p>Imagem: <img src="${item.caminhoImagem}" alt="${item.tipo}" width="100"></p>
            <p>Decoração: ${item.decoracao.descricao || 'Nenhuma descrição'}</p>
            <p>Arquivo: ${item.decoracao.arquivo || 'Nenhum arquivo'}</p>
        `;
        }

        if(item.tipo == "Doce"){
            itemElemento.innerHTML = `
            <h3>${item.tipo}</h3>
            <p>Sabor: ${item.saborDoce}</p>
            <p>Quantidade: ${item.quantidade}</p>
            <p>Preço: ${item.total}</p>
            `;
        }
        carrinhoDisplay.appendChild(itemElemento); // Adiciona o item ao display do carrinho
    });
}

// Chama a função para exibir o carrinho ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    exibirCarrinho()
});
