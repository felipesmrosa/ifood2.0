const menos = document.getElementById("minus");
const mais = document.getElementById("plus");
const quantidadeSpan = document.getElementById("quantidade");
let quantidade = 0;

menos.addEventListener("click", () => {
    if (quantidade > 0) {
        quantidade--;
        quantidadeSpan.textContent = quantidade;
    }
});

mais.addEventListener("click", () => {
    quantidade++;
    quantidadeSpan.textContent = quantidade;
});