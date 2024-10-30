function calcularPreco(){
    

   const selecionado = document.querySelector('input[name="escolha-doce"]:checked');

   const precoUnitario = parseFloat(selecionado.getAttribute('data-preco'));

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