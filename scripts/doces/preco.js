function calcularPreco(){
    const precoUnitario = document.getElementsByClassName("preco");
    const quantidade = document.getElementById("quantidade").value;
    const total = precoUnitario * quantidade;

    

    document.getElementById("precoTotal").textContent = `R$ ${total.toFixed(2)}`;
}