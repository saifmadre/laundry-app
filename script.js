let total = 0;

const dryButton = document.getElementById("dryCleaningBtn");
const washButton = document.getElementById("washFoldBtn");
const ironingButton = document.getElementById("ironingBtn");

const cart = document.getElementById("cartItems");
const totalPrice = document.getElementById("total");

function removeEmptyMessage() {
    if (cart.textContent.includes("No items added")) {
        cart.innerHTML = "";
    }
}

function showEmptyMessage() {
    if (cart.children.length === 0) {
        cart.innerHTML = "<li>No items added.</li>";
    }
}

dryButton.addEventListener("click", function () {
    removeEmptyMessage();

    total = total + 200;

    const item = document.createElement("li");
    item.textContent = "Dry Cleaning ";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function () {
        item.remove();

        total = total - 200;
        totalPrice.textContent = total;

        dryButton.disabled = false;
        dryButton.textContent = "Add Item";

        showEmptyMessage();
    });

    item.appendChild(removeButton);
    cart.appendChild(item);

    totalPrice.textContent = total;

    dryButton.disabled = true;
    dryButton.textContent = "Added";
});

washButton.addEventListener("click", function () {
    removeEmptyMessage();

    total = total + 100;

    const item = document.createElement("li");
    item.textContent = "Wash & Fold ";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function () {
        item.remove();

        total = total - 100;
        totalPrice.textContent = total;

        washButton.disabled = false;
        washButton.textContent = "Add Item";

        showEmptyMessage();
    });

    item.appendChild(removeButton);
    cart.appendChild(item);

    totalPrice.textContent = total;

    washButton.disabled = true;
    washButton.textContent = "Added";
});

ironingButton.addEventListener("click", function () {
    removeEmptyMessage();

    total = total + 50;

    const item = document.createElement("li");
    item.textContent = "Ironing ";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function () {
        item.remove();

        total = total - 50;
        totalPrice.textContent = total;

        ironingButton.disabled = false;
        ironingButton.textContent = "Add Item";

        showEmptyMessage();
    });

    item.appendChild(removeButton);
    cart.appendChild(item);

    totalPrice.textContent = total;

    ironingButton.disabled = true;
    ironingButton.textContent = "Added";
});