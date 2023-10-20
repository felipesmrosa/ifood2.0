import dados from "./json/bancoDados.json" assert { type: "json" };

const hamburguerias = dados.restaurantes;
let lista = document.querySelector(".lista");
let identify = document.querySelector(".identifyRestaurant")

const urlParams = new URLSearchParams(window.location.search);
//console.log(urlParams)

const idParams = urlParams.get("id");
//console.log('idParams', idParams)

const hamburgueriaPorId = hamburguerias.find((hamburgueria) => {
  return hamburgueria.id === parseInt(idParams)
});

console.log("hamburgueriaPorId", hamburgueriaPorId)

identify.innerHTML = 
`
    <img src="${hamburgueriaPorId.logo}" id="funcionaa" alt="Logo de cada hamburgueria" style="
      width: 10%;
      border-radius: 50%;
      ">
      <h1>${hamburgueriaPorId.nome}</h1>
      <h1 style="margin: 2rem 0;">MENU</h1>
`;

//console.log(hamburgueriaPorId)
let cart = [];

if (localStorage.getItem("@ifood-2")) {
  cart = JSON.parse(localStorage.getItem("@ifood-2"));
}

if (hamburgueriaPorId.id) {
  hamburgueriaPorId.menu.forEach((prato) => {

    let li = document.createElement("li"); //criei um <li></li>
    li.classList.add("li_Restaurantes");
    li.id = "listinha";

    let div = document.createElement("div"); //Criei um <div></div>
    div.classList.add("restaurantes");

    div.innerHTML += `
      <img class="teste" id="logoRestaurante" src='${prato.imgBurguer}'>
      <h4 style="margin-top: 1rem;">${prato.nome}</h4>
      <p style="
      background: var(--cor-3);
      border-radius: 28px;
      padding: 0.1rem 0.5rem;">R$ ${prato.preco}</p>
      <p style="display: none;">${prato.restaurante}</p>
    `;

    let btnCart = document.createElement("button");
    btnCart.classList.add("btn");
    btnCart.classList.add("btn-primary");
    btnCart.classList.add("w-100");
    btnCart.classList.add("adicionarAoCarrinho");
    btnCart.setAttribute("data-bs-toggle", "modal");
    btnCart.setAttribute("data-bs-target", "#exampleModal123");
    btnCart.innerHTML = "Adicionar ao Carrinho";
    // console.log(btnCart);

    btnCart.addEventListener("click", (e) => {
      e.preventDefault();
      cart.push(prato);
      console.log(cart);
      const myJSON = JSON.stringify(cart);

      localStorage.setItem("@ifood-2", myJSON);
    });

    // <button type="button" id="btn-addShoppingCart" class="btn btn-primary w-100 adicionarAoCarrinho" data-bs-toggle="modal" data-bs-target="#exampleModal123">
    //     Adicionar ao Carrinho
    //   </button>

    div.innerHTML += `
      <div class="modal fade" id="exampleModal123" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">GruppeFoods</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          <div class="modal-body">
            Pedido Adicionado ao Carrinho!
          </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><a href="../pages/carrinho.html">Ir para o Carrinho</a></button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Continuar Comprando</button>
            </div>
          </div>
      </div>
      </div>
      `;



    li.appendChild(div); // Coloca esse <div></div> dentro da li criada
    div.appendChild(btnCart)

    lista.appendChild(li); //Coloca a <li></li> dentro da <ul></ul> com class lista la no html
  });
} else {
  // O ID não corresponde a nenhuma hamburgueria
  console.log("ID não encontrado");
}
