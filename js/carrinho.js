//array que fica no localStorage
//botão addEventListener (click, function {}) (Adicionar ao carrinho)
// const addCart = document.querySelectorAll('.adicionarAoCarrinho');

// addCart.forEach(button => {
//     button.addEventListener('click', () => {
//         const pegaInfo = document.querySelector('.restaurantes')
//         console.log(pegaInfo)
//     });
// });

if (localStorage.getItem("@ifood-2")) {
  cart = JSON.parse(localStorage.getItem("@ifood-2"));
}

const cart = document.querySelector("#cart");
cart.innerHTML = "";
