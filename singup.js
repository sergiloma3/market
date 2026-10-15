const userid = document.getElementById("user");
const mailid = document.getElementById("email");
const telid = document.getElementById("tel");
const mdpid = document.getElementById("mdp");
const validmail = document.querySelector(".valid_email");
const invalidmail = document.querySelector(".errortxt");
const validnum = document.querySelector(".valid_num");
const invalidnum = document.querySelector(".errornum");
const form = document.querySelector("form");
const invalidmdp = document.querySelector(".errormdp");
const validmdp = document.querySelector(".valid_mdp");
const invalidname = document.querySelector(".errorname");
const validname = document.querySelector(".valid_name");
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

function checknum() {
  const numvalue = telid.value.trim();
  const numregex = /^(032|033|034|037|038)[0-9]{7}$/;

  if (numvalue === "") {
    invalidnum.classList.remove("active");
    validnum.classList.remove("active");
  } else if (!numregex.test(numvalue)) {
    invalidnum.classList.add("active");
    validnum.classList.remove("active");
  } else {
    invalidnum.classList.remove("active");
    validnum.classList.add("active");
  }
}
telid.addEventListener("input", checknum);

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

function checkname() {
  const namevalue = userid.value.trim();
  const nameregex = /^[a-zA-Z0-9_-]{8,}$/;

  if (namevalue === "") {
    invalidname.classList.remove("active");
    validname.classList.remove("active");
  } else if (!nameregex.test(namevalue)) {
    invalidname.classList.add("active");
    validname.classList.remove("active");
  } else {
    invalidname.classList.remove("active");
    validname.classList.add("active");
  }
}
userid.addEventListener("input", checkname);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkemail();
  checknum();
  checkmdp();
  checkname();
  const emailOK = validmail.classList.contains("active");
  const numOK = validnum.classList.contains("active");
  const mdpOK = validmdp.classList.contains("active");
  const nameOK = validmdp.classList.contains("active");
  if (emailOK && numOK && mdpOK && nameOK) {
    alert("Compte crée avec succes! ✅");
    window.location.href = "home.html";
  } else {
    alert("échec de creation du compte! ❌");
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
