let total = 0;

const dryButton = document.getElementById("dryCleaningBtn");
const washButton = document.getElementById("washFoldBtn");
const ironingButton = document.getElementById("ironingBtn");
const stainButton = document.getElementById("stainRemovalBtn");
const leatherButton = document.getElementById("leatherBtn");
const weddingButton = document.getElementById("weddingBtn");

const cart = document.getElementById("cartItems");
const totalPrice = document.getElementById("total");

let dryAdded = false;
let washAdded = false;
let ironingAdded = false;
let stainAdded = false;
let leatherAdded = false;
let weddingAdded = false;

function removeEmptyMessage() {
    const emptyCart = document.getElementById("emptyCart");

    if (emptyCart) {
        emptyCart.remove();
    }
}

function showEmptyMessage() {
    if (cart.children.length === 0) {
        cart.innerHTML = '<li class="empty-cart" id="emptyCart">No items added.</li>';
    }
}

function addCartItem(itemId, serviceName, price) {
    const item = document.createElement("li");
    item.id = itemId;

    item.innerHTML = `
        <span></span>
        <span>${serviceName}</span>
        <span>₹${price}</span>
    `;

    cart.appendChild(item);
}

function removeCartItem(itemId) {
    const item = document.getElementById(itemId);

    if (item) {
        item.remove();
    }

    showEmptyMessage();
}

dryButton.addEventListener("click", function () {
    if (dryAdded === false) {
        removeEmptyMessage();

        addCartItem("dryItem", "Dry Cleaning", 200);
        total = total + 200;

        dryButton.textContent = "Remove Item";
        dryButton.classList.add("remove-mode");

        dryAdded = true;
    } else {
        removeCartItem("dryItem");
        total = total - 200;

        dryButton.textContent = "Add Item";
        dryButton.classList.remove("remove-mode");

        dryAdded = false;
    }

    totalPrice.textContent = total;
});

washButton.addEventListener("click", function () {
    if (washAdded === false) {
        removeEmptyMessage();

        addCartItem("washItem", "Wash & Fold", 100);
        total = total + 100;

        washButton.textContent = "Remove Item";
        washButton.classList.add("remove-mode");

        washAdded = true;
    } else {
        removeCartItem("washItem");
        total = total - 100;

        washButton.textContent = "Add Item";
        washButton.classList.remove("remove-mode");

        washAdded = false;
    }

    totalPrice.textContent = total;
});

ironingButton.addEventListener("click", function () {
    if (ironingAdded === false) {
        removeEmptyMessage();

        addCartItem("ironingItem", "Ironing", 50);
        total = total + 50;

        ironingButton.textContent = "Remove Item";
        ironingButton.classList.add("remove-mode");

        ironingAdded = true;
    } else {
        removeCartItem("ironingItem");
        total = total - 50;

        ironingButton.textContent = "Add Item";
        ironingButton.classList.remove("remove-mode");

        ironingAdded = false;
    }

    totalPrice.textContent = total;
});
stainButton.addEventListener("click", function () {
    if (stainAdded === false) {
        removeEmptyMessage();
        addCartItem("stainItem", "Stain Removal", 500);
        total = total + 500;
        stainButton.textContent = "Remove Item";
        stainButton.classList.add("remove-mode");
        stainAdded = true;
    } else {
        removeCartItem("stainItem");
        total = total - 500;
        stainButton.textContent = "Add Item";
        stainButton.classList.remove("remove-mode");
        stainAdded = false;
    }

    totalPrice.textContent = total;
});

leatherButton.addEventListener("click", function () {
    if (leatherAdded === false) {
        removeEmptyMessage();
        addCartItem("leatherItem", "Leather & Suede Cleaning", 999);
        total = total + 999;
        leatherButton.textContent = "Remove Item";
        leatherButton.classList.add("remove-mode");
        leatherAdded = true;
    } else {
        removeCartItem("leatherItem");
        total = total - 999;
        leatherButton.textContent = "Add Item";
        leatherButton.classList.remove("remove-mode");
        leatherAdded = false;
    }

    totalPrice.textContent = total;
});

weddingButton.addEventListener("click", function () {
    if (weddingAdded === false) {
        removeEmptyMessage();
        addCartItem("weddingItem", "Wedding Dress Cleaning", 2800);
        total = total + 2800;
        weddingButton.textContent = "Remove Item";
        weddingButton.classList.add("remove-mode");
        weddingAdded = true;
    } else {
        removeCartItem("weddingItem");
        total = total - 2800;
        weddingButton.textContent = "Add Item";
        weddingButton.classList.remove("remove-mode");
        weddingAdded = false;
    }

    totalPrice.textContent = total;
});