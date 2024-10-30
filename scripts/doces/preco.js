function calcularPreco(){

    const precoString = document.querySelector(".preco");
    const precoUnitario = parseFloat(precoString);
    const quantidade = document.querySelector("#quantidade").value;
    const total = precoUnitario * quantidade;
    console.log(precoUnitario)
    document.querySelector("#precoTotal").textContent = `R$ ${total.toFixed(2)}`;
}