document.addEventListener("DOMContentLoaded", () => {
    // Verifica a chave "carrinhoNotificacao" no localStorage
    if (localStorage.getItem("carrinhoNotificacao") === "true") {
        iconeNotificacao.style.display = "block"; // Exibe a notificação se houver itens
    } else {
        iconeNotificacao.style.display = "none"; // Oculta a notificação se estiver vazio
    }
});