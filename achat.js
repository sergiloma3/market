const menuToggle = document.querySelector(".menu-toggle");
const navBottom = document.querySelector(".nav-bottom");

if (menuToggle && navBottom) {
  menuToggle.addEventListener("click", () => {
    navBottom.classList.toggle("active");
  });
}

const detailsbouton = document.querySelector(".detailpro");
const voirdetails = document.getElementById("infos");

const supproduit = document.getElementById("btn-sup");

const codeprom = document.getElementById("codepm");
const codepromok = document.getElementById("appliquer");

const plus = document.getElementById("plus");
const moins = document.getElementById("n");
const chiffre = document.getElementById("ch");
const prixaffiche = document.getElementById("prix-achat");

let quantite = Number(localStorage.getItem("quantite")) || 1;
const prix = Number(localStorage.getItem("prix"));

window.addEventListener("load", () => {
  chiffre.textContent = quantite;
  prixaffiche.textContent = prix * quantite + " Ar";
});
plus.addEventListener("click", () => {
  quantite++;
  localStorage.setItem("quantite", quantite);
  chiffre.textContent = quantite;
  prixaffiche.textContent = prix * quantite + " Ar";
});
moins.addEventListener("click", () => {
  if (quantite > 1) {
    quantite--;
    localStorage.setItem("quantite", quantite);
    chiffre.textContent = quantite;
    prixaffiche.textContent = prix * quantite + " Ar";
  }
});

detailsbouton.addEventListener("click", () => {
  voirdetails.classList.toggle("active");
});

supproduit.addEventListener("click", () => {
  localStorage.removeItem("image");
  localStorage.removeItem("nom");
  localStorage.removeItem("prix");
  document.getElementById("img-achat").src = "";
  document.getElementById("nom-achat").textContent = "";
  prixaffiche.textContent = "";
  quantite = 1;
  chiffre.textContent = quantite;
  alert("le produit est supprimer ! ");
});

function codepromo() {
  codepromok.addEventListener("click", () => {
    const codep = codeprom.value.trim();

    if (codep === "Messi" || codep === "LMpromo") {
      alert("Code promo validé!");
    } else {
      alert("Code promo pas validé!");
    }
  });
}
codepromo();

document.getElementById("img-achat").src = localStorage.getItem("image");
document.getElementById("nom-achat").textContent = localStorage.getItem("nom");
document.getElementById("prix-achat").textContent =
  localStorage.getItem("prix");
