const menos = document.getElementById("minus");
const mais = document.getElementById("plus");
const quantitySpan = document.getElementById("quantity");
let quantity = 0;

menos.addEventListener("click", () => {
    if (quantity > 0) {
        quantity--;
        quantitySpan.textContent = quantity;
    }
});

mais.addEventListener("click", () => {
    quantity++;
    quantitySpan.textContent = quantity;
});