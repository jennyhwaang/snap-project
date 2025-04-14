const toggles = document.querySelectorAll(".drop-down-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const menu = toggle.nextElementSibling;
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });
});
