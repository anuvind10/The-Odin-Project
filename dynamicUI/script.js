const dropdown = document.querySelector("#dropdown");
const dropdownValues = document.querySelector("#dropdown-options");

dropdown.addEventListener("click", () => {
  dropdownValues.classList.toggle("visible");
});
