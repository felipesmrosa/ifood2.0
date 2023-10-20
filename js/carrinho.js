let cart = [];

if (localStorage.getItem("@ifood-2")) {
  cart = JSON.parse(localStorage.getItem("@ifood-2"));
}

console.log(cart)
let section = document.querySelector("#conteudo"); //pego a section pelo ID

let divSection = document.createElement("div"); //criei uma div
divSection.classList.add("carrinho"); //adicionei uma classe

let ul = document.querySelector("#ul_carrinho") //pego o ul pelo ID
let total_price = document.querySelector("#total_price")

let total = 0

cart.forEach(infoCart => {
  let li = document.createElement("li"); //criei um li
  li.id = "li_carrinho"; //adicionei um ID

  let divLi = document.createElement("div"); //criei uma div
  divLi.classList.add("produtoCarrinho"); //adicionei uma classe

  total += infoCart.preco

  // let divFinish = document.querySelector("#finishCart")

  ul.appendChild(li); //Coloca a li dentro da ul
  li.appendChild(divLi); //Coloca a divLi dentro da li


  divLi.innerHTML +=
    `
    <img class="prato" src="${infoCart.imgBurguer}" alt="">
    <span class="spanDescricoesProdutos" id="descricoes_produto">
      <h5>${infoCart.nome}</h5>
      <p style="margin-bottom: 1rem;">Restaurante</p>
      <h5 class="price">R$ ${infoCart.preco}</h5>
    </span>
    `
    ;

  let buttonDel = document.createElement("button");
  buttonDel.id = "del_product";
  buttonDel.innerHTML = `<img src="../img/trash-2.svg">`;
  buttonDel.addEventListener("click", (e) => {
    e.preventDefault();
    const teste = cart.filter(item => item.id != infoCart.id)
    localStorage.setItem("@ifood-2", JSON.stringify(teste));
    //console.log(teste);
    location.reload();
  });

  let divButtonQuantity = document.createElement("div")
  divButtonQuantity.classList.add("btn_quantidade");

  let quantidade = 1;

  let buttonMinus = document.createElement("button");
  buttonMinus.id = "minus";
  buttonMinus.innerHTML = `<p>-</p>`;
  buttonMinus.addEventListener("click", () => {
    if (quantidade > 1) {
      quantidade--;
      span.textContent = quantidade;
    }
  });

  let span = document.createElement("span")
  span.id = "quantity";
  span.innerHTML = `1`;

  let buttonPlus = document.createElement("button");
  buttonPlus.id = "plus";
  buttonPlus.innerHTML = `<p>+</p>`;
  buttonPlus.addEventListener("click", () => {
    quantidade++;
    span.textContent = quantidade;
  });

  divLi.appendChild(buttonDel); //Coloca a divLi dentro da li
  divLi.appendChild(divButtonQuantity); //Coloca a divLi dentro da li
  divButtonQuantity.appendChild(buttonMinus);
  divButtonQuantity.appendChild(span);
  divButtonQuantity.appendChild(buttonPlus);
});

let h2 = document.createElement("h2")
h2.innerHTML = `TOTAL: R$${total}`;

let buttonFinish = document.createElement("button");
buttonFinish.classList.add("btn","btn-primary","FINALPEDIDO");
buttonFinish.setAttribute("data-bs-toggle", "modal");
buttonFinish.setAttribute("data-bs-target", "#CARRINHOO");
buttonFinish.innerHTML = "Finalizar";
buttonFinish.addEventListener("click", () => {
  localStorage.clear();
});

total_price.appendChild(h2); //Coloca a h2 dentro da total_price

section.appendChild(divSection); //Coloca a divSection dentro do section
divSection.appendChild(ul); //Coloca a ul dentro da divSection
divSection.appendChild(total_price); //Coloca a total_price dentro da divSection
divSection.appendChild(buttonFinish); //Coloca a total_price dentro da divSection
