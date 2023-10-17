const removerProdutos = document.getElementsByClassName("del_product")
//console.log(removerProdutos)

for(var i = 0; i < removerProdutos.length; i++) {
    removerProdutos[i].addEventListener("click", function(event) {
        event.target.parentElement.parentElement.remove()
    })
}

const cartProducts = document.getElementsByClassName("spanDescricoesProdutos")
for(var i = 0; i < cartProducts.length; i++) {
    // console.log(cartProducts[i])
    const productPrice = cartProducts[i].getElementsByClassName("price")[0].innerText
    console.log(productPrice)
}