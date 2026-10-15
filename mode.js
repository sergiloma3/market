const menuToggle = document.querySelector(".menu-toggle");
const navBottom = document.querySelector(".nav-bottom");

if (menuToggle && navBottom) {
  menuToggle.addEventListener("click", () => {
    navBottom.classList.toggle("active");
  });
}
document.querySelectorAll(".btn-acheter").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("nom", btn.dataset.nom);
    localStorage.setItem("prix", btn.dataset.prix);
    localStorage.setItem("image", btn.dataset.image);
    localStorage.setItem("quantite", 1);
    window.location.href = "achat.html";
  });
});
