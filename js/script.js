import dados from "./json/bancoDados.json" assert { type: "json" };

const hamburguerias = dados.restaurantes;
let lista = document.querySelector(".lista");
// let identify = document.querySelector(".identifyRestaurant");

hamburguerias.forEach((hamburgueria) => {
  //console.log(hamburgueria.menu[0].nome);

  // let imageRestaurante = document.createElement("imageRestaurante")
  // imageRestaurante.classList.add("img_restaurant");

  // let nameRestaurant = document.createElement("h1");
  // let title_menu = document.createElement("h1");

  let li = document.createElement("li"); //criei um <li></li>
  li.classList.add("li_Restaurantes");

  let a = document.createElement("a"); //Criei um <a></a>
  a.classList.add("linkRestaurante");
  a.href = "./pages/interna.html?id=" + hamburgueria.id;

  let div = document.createElement("div"); //Criei um <div></div>
  div.classList.add("restaurantes")

  div.innerHTML +=
  `
    <img class="${hamburgueria.id}" id="logoRestaurante" src='${hamburgueria.logo}'>
    <p style="margin: 1.5rem 0 0 0; font-size: 1.75rem;">${hamburgueria.nome}</p>
    <p">${hamburgueria.localizacao}</p>
      
  `

  // identify.appendChild(imageRestaurante);
  // identify.appendChild(nameRestaurant);
  // identify.appendChild(title_menu);

  li.appendChild(a);
  
  a.appendChild(div); // Coloca esse <div></div> dentro da li criada
  
  lista.appendChild(li); //Coloca a <li></li> dentro da <ul></ul> com class lista la no html
});
