// Função de adicionar produto ao localStorage
function adicionarAoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []; // Pega o carrinho ou cria um vazio
    carrinho.push(produto); // Adiciona o produto ao carrinho
    localStorage.setItem("carrinho", JSON.stringify(carrinho)); // Salva o carrinho atualizado
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
        
        itemElemento.innerHTML = `
            <h3>${item.tipo}</h3>
            <p>Formato: ${item.formato}</p>
            <p>Massa: ${item.massa}</p>
            <p>Cobertura: ${item.cobertura}</p>
            <p>Preço: ${item.preco}</p>
            <p>Imagem: <img src="${item.nomeArquivoImagem}" alt="${item.tipo}" width="100"></p>
        `;
        
        if (item.tipo === "Bolo Decorado") {
            itemElemento.innerHTML += `
                <p>Decoração: ${item.decoracao.descricao || 'Nenhuma descrição'}</p>
                <p>Arquivo: ${item.decoracao.arquivo || 'Nenhum arquivo'}</p>
            `;
        }

        carrinhoDisplay.appendChild(itemElemento); // Adiciona o item ao display do carrinho
    });
}

// Chama a função para exibir o carrinho ao carregar a página
document.addEventListener("DOMContentLoaded", exibirCarrinho);
