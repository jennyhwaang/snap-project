const nameCheckbox = document.querySelectorAll(
  "#filter-name-options input[type=checkbox]"
);
const ratingCheckbox = document.querySelectorAll(
  "#filter-rating-options input[type=checkbox]"
);
const typeCheckbox = document.querySelectorAll(
  "#filter-type-options input[type=checkbox]"
);

nameCheckbox.forEach((checkBox) => {
  checkBox.addEventListener("change", () => {
    const selectedFilters = Array.from(nameCheckbox)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value.toLowerCase());

    filterCoffeesby("description", selectedFilters);
  });
});

typeCheckbox.forEach((checkBox) => {
  checkBox.addEventListener("change", () => {
    const selectedFilters = Array.from(typeCheckbox)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value.toLowerCase());

    filterCoffeesby("type", selectedFilters);
  });
});

ratingCheckbox.forEach((checkBox) => {
  checkBox.addEventListener("change", () => {
    const selectedFilters = Array.from(ratingCheckbox)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value.toLowerCase());

    filterCoffeesby("rating", selectedFilters);
  });
});

// round down for rating
function filterCoffeesby(field, terms) {
  users.forEach((user) => {
    let value = user[field];

    if (field == "rating") {
      value = Math.floor(parseFloat(value)).toString();
    } else if (field == "type") {
      const typeSelect = user.element.querySelector("[data-type]");
      value = Array.from(typeSelect.options).map((opt) =>
        opt.value.toLowerCase()
      );
    } else {
      value = value.toLowerCase();
    }

    let matches = terms.length == 0;
    if (!matches) {
      for (let i = 0; i < terms.length; i++) {
        if (value.indexOf(terms[i]) != -1) {
          matches = true;
          break;
        }
      }
    }
    user.element.style.display = matches ? "block" : "none";
  });
}
