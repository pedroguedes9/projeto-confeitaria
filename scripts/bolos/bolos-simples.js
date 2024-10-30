let numeroDeVezes = 0
function adicionarBoloSimplesAoCarrinho (event) {
    event.preventDefault()
    const formato = document.querySelector('input[name="escolha-formato"]:checked').value
    const massa = document.querySelector('input[name="escolha-massa"]:checked').value
    const cobertura = document.querySelector('input[name="escolha-cobertura"]:checked').value

    const formatoSelecionado = document.querySelector('input[name="escolha-formato"]:checked')
    const preco = formatoSelecionado.closest("label").querySelector(".preco").textContent
    const caminhoImagem = formatoSelecionado.closest("label").querySelector("img").src
    const nomeArquivoImagem = caminhoImagem.split("/").pop()
    const adicionadoAoCarrinho = document.querySelector("#adicionado-ao-carrinho")


    const produto = {
        tipo: "Bolo Simples",
        formato,
        massa,
        cobertura,
        preco,
        nomeArquivoImagem,
    }
    adicionarAoCarrinho(produto)
    numeroDeVezes += 1
    adicionadoAoCarrinho.textContent = `${numeroDeVezes} bolo(s) simples adicionado(s) ao carrinho!!`
}
document.querySelector("#botao-bolo-simples").addEventListener("click", adicionarBoloSimplesAoCarrinho)
