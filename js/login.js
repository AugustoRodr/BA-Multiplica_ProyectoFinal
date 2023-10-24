document.getElementById("show-signup").addEventListener("click", function () {
  document.getElementById("form-signup").style.display = "flex";
  document.getElementById("form-signup").style.opacity = "1";
  document.getElementById("form-login").style.display = "none";
  document.getElementById("form-login").style.opacity = "0";
  // no funciona la trancicion como se espera
})

document.getElementById("show-login").addEventListener("click", function () {
  document.getElementById("form-login").style.display = "flex";
  document.getElementById("form-login").style.opacity = "1";
  document.getElementById("form-signup").style.display = "none";
  document.getElementById("form-signup").style.opacity = "0";
})