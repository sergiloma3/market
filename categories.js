const menuToggle = document.querySelector(".menu-toggle");
const navBottom = document.querySelector(".nav-bottom");

if (menuToggle && navBottom) {
  menuToggle.addEventListener("click", () => {
    navBottom.classList.toggle("active");
  });
}
