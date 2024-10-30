function formatarPreco(preco) {
    return `R$ ${preco.toFixed(2).replace(".", ",")}`;
}
function verificarNotificacaoCarrinho() {
    const iconeNotificacao = document.querySelector("#icone-notificacao");
    if (!iconeNotificacao) return; // Se o elemento não existe na página, sai da função

    // Exibe ou oculta a notificação com base na chave "carrinhoNotificacao" do localStorage
    if (localStorage.getItem("carrinhoNotificacao") === "true") {
        iconeNotificacao.style.display = "block";
    } else {
        iconeNotificacao.style.display = "none";
    }
}

// Chama a função automaticamente ao carregar a página
document.addEventListener("DOMContentLoaded", verificarNotificacaoCarrinho);

