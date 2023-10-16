import dados from "./json/bancoDados.json" assert { type: "json" };

const hamburguerias = dados.restaurantes;
let lista = document.querySelector(".lista");

hamburguerias.forEach((hamburgueria) => {
  // console.log(hamburgueria);
  hamburgueria.menu.forEach((prato) => {
    console.log(
      "Restaurante: " +
      hamburgueria.nome +
      ", Prato: " +
      prato.nome +
      ", ID: " +
      prato.id)


    let li = document.createElement("li"); //criei um <li></li>
    li.classList.add("li_Restaurantes");

    let div = document.createElement("div"); //Criei um <div></div>
    div.classList.add("restaurantes")

    div.innerHTML +=
      `
    <img class="${hamburgueria.id}" id="logoRestaurante" src='${prato.imgBurguer}'>
    <h4>${prato.nome}</h4>
    <p>R$ ${prato.preco}</p>

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal123">
        Adicionar ao Carrinho
      </button>

      <div class="modal fade" id="exampleModal123" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${hamburgueria.nome}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          <div class="modal-body">
            *nome do pedido Adicionado!
          </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><a href="../pages/carrinho.html">Ir para o Carrinho</a></button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Continuar Comprando</button>
            </div>
          </div>
      </div>
      </div>
  `

    li.appendChild(div); // Coloca esse <div></div> dentro da li criada

    lista.appendChild(li); //Coloca a <li></li> dentro da <ul></ul> com class lista la no html

  });
});
