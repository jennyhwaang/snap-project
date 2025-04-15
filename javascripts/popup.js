const modal = document.querySelector(".pop-up-container");

const cartCountElement = document.getElementById("cart-count");
const addToCartBtn = modal.querySelector(".add-to-cart");
const quantityInput = modal.querySelector(".quantity-input");

let cartCount = 0;

addToCartBtn.onclick = () => {
  console.log("clicked");
  const quantity = parseInt(quantityInput.value);
  if (isNaN(quantity) || quantity <= 0) return;

  cartCount += quantity;
  cartCountElement.textContent = cartCount;

  modal.style.display = "none";
};

modal.querySelector(".close-btn").addEventListener("click", () => {
  modal.style.display = "none";
});

function populatePopup(card, coffee) {
  card.addEventListener("click", () => {
    modal.querySelector("img").src = coffee.image;
    modal.querySelector("[data-coffee-name]").textContent = coffee.name;
    modal.querySelector("[data-price]").textContent = "$" + coffee.price;
    modal.querySelector("[data-caffeine]").textContent = coffee.caffeine + "mg";
    modal.querySelector("[data-description]").textContent = coffee.description;
    modal.querySelector("[data-ingredients]").textContent = coffee.ingredients;
    modal.querySelector("[data-rating]").textContent =
      "Customer Rating: " + coffee.rating + " stars";

    const sizeSelect = modal.querySelector("[data-size]");
    const typeSelect = modal.querySelector("[data-type]");
    const milkSelect = modal.querySelector("[data-milk]"); // Clear previous options

    sizeSelect.innerHTML = "";
    typeSelect.innerHTML = "";
    milkSelect.innerHTML = ""; // Populate size

    coffee.size.forEach((size) => {
      const option = document.createElement("option");
      option.value = size.toLowerCase();
      option.textContent = size;
      sizeSelect.appendChild(option);
    }); // Populate type

    coffee.type.forEach((type) => {
      const option = document.createElement("option");
      option.value = type.toLowerCase();
      option.textContent = type;
      typeSelect.appendChild(option);
    }); // Populate milk

    coffee.milk.forEach((milk) => {
      const option = document.createElement("option");
      option.value = milk.toLowerCase();
      option.textContent = milk;
      milkSelect.appendChild(option);
    });

    quantityInput.value = 1;
    modal.style.display = "block";
  });
}
