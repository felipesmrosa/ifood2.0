import dados from "./json/bancoDados.json" assert { type: "json" };

const hamburguerias = dados.restaurantes;
let lista = document.querySelector(".lista");

hamburguerias.forEach((hamburgueria) => {
  console.log(hamburgueria);

  let li = document.createElement("li"); //criei um <li></li>
  li.classList.add("li_Restaurantes");

  let div = document.createElement("div"); //Criei um <div></div>
  div.classList.add("restaurantes")

  div.innerHTML +=
  `
    <img class="${hamburgueria.menu[0].id}" id="logoRestaurante" src='${hamburgueria.menu[0].imgBurguer}'>
    <h4>${hamburgueria.menu[0].nome}</h4>
    <p>R$ ${hamburgueria.menu[0].preco}</p>
      
  `
  
  li.appendChild(div); // Coloca esse <div></div> dentro da li criada
  
  lista.appendChild(li); //Coloca a <li></li> dentro da <ul></ul> com class lista la no html
});
