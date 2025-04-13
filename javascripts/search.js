const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

let users = coffeearray.map((coffee) => {
  const card = userCardTemplate.content.cloneNode(true).children[0];
  const coffeeName = card.querySelector("[data-coffee-name]");
  const price = card.querySelector("[data-price]");
  const caffeine = card.querySelector("[data-caffeine]");
  const description = card.querySelector("[data-description]");
  const ingredients = card.querySelector("[data-ingredients]");
  const sizeList = card.querySelector("[data-size]");
  const typeList = card.querySelector("[data-type]");
  const milkList = card.querySelector("[data-milk]");
  const rating = card.querySelector("[data-rating]");
  const img = card.querySelector("img");

  coffeeName.textContent = coffee.name;
  price.textContent = "$" + coffee.price;
  caffeine.textContent = coffee.caffeine + "mg";
  description.textContent = coffee.description;
  ingredients.textContent = coffee.ingredients;
  rating.textContent = coffee.rating;
  img.src = coffee.image;
  img.alt = coffee.name;

  //   size options
  let sizes = coffee.size;

  sizes.forEach((size) => {
    const option = document.createElement("option");
    option.value = size.toLowerCase();
    option.textContent = size;
    sizeList.appendChild(option);
  });

  // type options

  let types = coffee.type;

  types.forEach((type) => {
    const option = document.createElement("option");
    option.value = type.toLowerCase();
    option.textContent = type;
    typeList.appendChild(option);
  });
  //   milk options
  let milks = coffee.milk;

  milks.forEach((milk) => {
    const option = document.createElement("option");
    option.value = milk.toLowerCase();
    option.textContent = milk;
    milkList.appendChild(option);
  });

  userCardContainer.append(card);
  return {
    name: coffee.name,
    description: coffee.description,
    price: coffee.price,
    caffeine: coffee.caffeine,
    rating: coffee.rating,
    image: coffee.image,
    element: card,
  };
});

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  users.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.description.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
});
