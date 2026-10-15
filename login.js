const userid = document.getElementById("user");
const mailid = document.getElementById("email");
const telid = document.getElementById("tel");
const mdpid = document.getElementById("mdp");
const validmail = document.querySelector(".valid_email");
const invalidmail = document.querySelector(".errortxt");
const form = document.querySelector("form");
const invalidmdp = document.querySelector(".errormdp");
const validmdp = document.querySelector(".valid_mdp");
const voirlock = document.getElementById("lock");

function checkemail() {
  const emailvalue = mailid.value.trim();
  const emailregex = /^[a-zA-Z0-9_]+@(gmail|outlook|yahoo)\.(com|fr)$/;

  if (emailvalue === "") {
    invalidmail.classList.remove("active");
    validmail.classList.remove("active");
  } else if (!emailregex.test(emailvalue)) {
    invalidmail.classList.add("active");
    validmail.classList.remove("active");
  } else {
    invalidmail.classList.remove("active");
    validmail.classList.add("active");
  }
}

mailid.addEventListener("input", checkemail);

function checkmdp() {
  const mdpvalue = mdpid.value.trim();
  const mdpregex = /^[a-zA-Z0-9_#*+-]{6,}$/;

  if (mdpvalue === "") {
    invalidmdp.classList.remove("active");
    validmdp.classList.remove("active");
  } else if (!mdpregex.test(mdpvalue)) {
    invalidmdp.classList.add("active");
    validmdp.classList.remove("active");
  } else {
    invalidmdp.classList.remove("active");
    validmdp.classList.add("active");
  }
}
mdpid.addEventListener("input", checkmdp);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkemail();
  checkmdp();
  const emailOK = validmail.classList.contains("active");
  const mdpOK = validmdp.classList.contains("active");
  if (emailOK && mdpOK) {
    setTimeout(() => {
      alert("Connexion réussi! ✅");
      window.location.href = "home.html";
    }, 1500);
  } else {
    alert("échec de connexion! ❌");
  }
});

voirlock.addEventListener("click", () => {
  const icon = voirlock.querySelector("i");

  if (mdpid.type === "password") {
    mdpid.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    mdpid.type = "password";
    icon.classList.add("fa-eye");
  }
});
