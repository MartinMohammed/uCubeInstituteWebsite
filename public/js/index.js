// ----------------- JavaScript for Toggle Menu ----------------
const navLinks = document.getElementById("navLinks");
document.querySelector(".fa-bars").addEventListener("click", () => {
  navLinks.style.right = "0px";
});

document.querySelector(".fa-xmark").addEventListener("click", () => {
  navLinks.style.right = "-200px";
});
