import dados from "./json/bancoDados.json" assert { type: "json" };

const hamburguerias = dados.restaurantes;
let lista = document.querySelector(".lista");

hamburguerias.forEach((hamburgueria) => {
  let li = document.createElement("li"); //criei um <li></li>

  let div = document.createElement("div"); //Criei um <div></div>
  let pNome = document.createElement("p"); //Criei uma tag <p></p>
  pNome.innerHTML = "Nome: " + hamburgueria.nome; //Coloquei uma string nome e o nome da hamburgueria

  div.appendChild(pNome); // Coloca esse <p></p> dentro da div criada

  li.appendChild(div); // Coloca esse <div></div> dentro da li criada

  lista.appendChild(li); //Coloca a <li></li> dentro da <ul></ul> com class lista la no html
});
