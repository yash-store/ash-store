let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push(name);
    total += price;

    document.getElementById("items").innerText = cart.join(", ");
    document.getElementById("total").innerText = total;
}
