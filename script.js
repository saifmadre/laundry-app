let total = 0;

const button = document.getElementById("dryCleaningBtn");
const washButton = document.getElementById("washFoldBtn");

const cart = document.getElementById("cartItems");
const totalPrice = document.getElementById("total");

button.addEventListener("click", function () {

    total = 200;

    cart.textContent = "Dry Cleaning";

    totalPrice.textContent = total;

    button.disabled = true;
    button.textContent = "Added";
});

washButton.addEventListener("click", function () {

    total = total + 100;

    cart.textContent = cart.textContent + ", Wash & Fold";

    totalPrice.textContent = total;

    washButton.disabled = true;
    washButton.textContent = "Added";
});

const ironingButton = document.getElementById("ironingBtn");

ironingButton.addEventListener("click", function () {

    total = total + 50;

    cart.textContent = cart.textContent + ", Ironing";

    totalPrice.textContent = total;

    ironingButton.disabled = true;
    ironingButton.textContent = "Added";

});