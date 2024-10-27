function adicionarBoloSimplesAoCarrinho (event) {
    event.preventDefault()
    const formato = document.querySelector('input[name="escolha-formato"]:checked').value
    const massa = document.querySelector('input[name="escolha-massa"]:checked').value
    const cobertura = document.querySelector('input[name="escolha-cobertura"]:checked').value

    const formatoSelecionado = document.querySelector('input[name="escolha-formato"]:checked')
    const preco = formatoSelecionado.closest("label").querySelector(".preco").textContent

    const produto = {
        tipo: "Bolo Simples",
        formato,
        massa,
        cobertura,
        preco,
    }
    adicionarAoCarrinho(produto)
}
document.querySelector("#botao-bolo-simples").addEventListener("click", adicionarBoloSimplesAoCarrinho)
