function applyDarkMode(enabled) {
  document.body.classList.toggle("dark-mode", enabled);
  localStorage.setItem("darkMode", String(enabled));
}

document.addEventListener("DOMContentLoaded", () => {
  applyDarkMode(localStorage.getItem("darkMode") === "true");
});

const menuToggle = document.querySelector(".menu-toggle");
const navBottom = document.querySelector(".nav-bottom");

if (menuToggle && navBottom) {
  menuToggle.addEventListener("click", () => {
    navBottom.classList.toggle("active");
  });
}
