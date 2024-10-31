let numeroDeVezes = 0;
function calcularPreco(event){
  event.preventDefault()
  const doce = document.querySelector('input[name="escolha-doce"]:checked');
  const precoUnitario = parseFloat(doce.getAttribute('data-preco'));
   const quantidade = parseInt(document.querySelector("#quantidade").value) || 0;
   const total = precoUnitario * quantidade;
   document.querySelector("#precoTotal").textContent = `R$ ${total.toFixed(2)}`
   
}


function redefinirTotal(){
    document.querySelector('#precoTotal').textContent = "R$ 0,00";
    document.querySelector("#quantidade").value = "";
}

const inputsRadio = document.querySelectorAll('input[name="escolha-doce"]');
inputsRadio.forEach(input => {
  input.addEventListener("change", redefinirTotal);
})

function adicionarDocesAoCarrinho(event){
  event.preventDefault();
  const doce = document.querySelector('input[name="escolha-doce"]:checked');
  const precoUnitario = parseFloat(doce.getAttribute('data-preco'));
  const quantidade = parseInt(document.querySelector("#quantidade").value) || 0;
  const total = precoUnitario * quantidade;
  const caminhoImagem = doce.closest("label").querySelector("img").src;
  const adiocionadoAoCarrinho = document.querySelector("#adicionado-ao-carrinho");
  const saborDoce = doce.value

  const produto = {
    tipo: "Doce",
    saborDoce,
    quantidade,
    total,
  }
  adicionarAoCarrinho(produto)
  numeroDeVezes = quantidade
  adiocionadoAoCarrinho.textContent = `${numeroDeVezes} doce(s) adiocionado(s) ao carrinho!!`
}

document.querySelector("#botao-doce").addEventListener("click", adicionarDocesAoCarrinho);
document.addEventListener("DOMContentLoaded", () => {
 
  if (localStorage.getItem("carrinhoNotificacao") === "true") {
      iconeNotificacao.style.display = "block"; 
  } else {
      iconeNotificacao.style.display = "none"; 
  }
});