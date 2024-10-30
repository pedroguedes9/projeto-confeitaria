let numeroDeVezes = 0
function adicionarBoloDecoradoAoCarrinho (event) {
    event.preventDefault()
    const formato = document.querySelector('input[name="escolha-formato"]:checked').value
    const massa = document.querySelector('input[name="escolha-massa"]:checked').value
    const cobertura = document.querySelector('input[name="escolha-cobertura"]:checked').value
    const decoracaoArquivo = document.querySelector('input[type="file"]').files[0]
    const descricaoDecoracao = document.querySelector("#idescricao-decoracao").value
    const formatoSelecionado = document.querySelector('input[name="escolha-formato"]:checked')
    const preco = formatoSelecionado.closest("label").querySelector(".preco").textContent
    const caminhoImagem = formatoSelecionado.closest("label").querySelector("img").src
    const nomeArquivoImagem = caminhoImagem.split("/").pop()
    const adicionadoAoCarrinho = document.querySelector("#adicionado-ao-carrinho")

    const produto = {
        tipo: "Bolo Decorado",
        formato, 
        massa,
        cobertura,
        decoracao : {
            arquivo : decoracaoArquivo ? decoracaoArquivo.name : null,
            descricao: descricaoDecoracao
        },
        preco,
        nomeArquivoImagem
    }
    adicionarAoCarrinho(produto)
    numeroDeVezes += 1
    adicionadoAoCarrinho.textContent = `${numeroDeVezes} bolo(s) decorados adicionado(s) ao carrinho!!`
}
document.querySelector("#botao-bolo-decorado").addEventListener("click", adicionarBoloDecoradoAoCarrinho)
