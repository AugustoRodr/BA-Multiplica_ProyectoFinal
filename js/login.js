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

// Funcionalidad para "contactanos"
document.addEventListener("DOMContentLoaded", function () {
  let btnContact = document.querySelector("#form-contact")
  let conteinerForm = document.querySelector("#conteiner-form")
  let cerrarForm = document.querySelector("#cerrar-form")

  btnContact.addEventListener("click", function () {
    conteinerForm.classList.add("mostrar")
  })

  cerrarForm.addEventListener("click", function () {
    conteinerForm.classList.remove("mostrar")
  })
})

// Funcionalidad para validacion de usuarios
document.addEventListener("DOMContentLoaded", function () {

  function mostrarImagen(imagen) {
    imagen.style.opacity = 1

    setTimeout(function () { imagen.style.opacity = 0 }, 1500)
  }

  function validacionDatos(formulario, db) {

    formulario.addEventListener("submit", function (event) {
      // previene la recarga de la pagina
      event.preventDefault()
      let user = formulario.querySelector(".userName").value
      let pass = formulario.querySelector(".password").value
      let img = document.querySelector("#failed-icon")

      if (formulario.querySelector("#email")) {
        // console.log("estoy en registrar")
        let email = formulario.querySelector("#email").value
        let agregar = 0
        img = document.querySelector("#succes-icon")

        db.forEach(cuenta => {
          if (user === cuenta.userName || email === cuenta.email) {
            img = document.querySelector("#failed-icon")
            agregar = 1
            alert("El Usuario y/o el Email ya estan registrados.")
          }
        })

        if (agregar == 0) {
          let nuevoUser = {
            "first_name": formulario.querySelector("#name").value,
            "last_name": formulario.querySelector("#last-name").value,
            "email": email,
            "gender": "",
            "password": pass,
            "userName": user
          }
          db.push(nuevoUser)
        }
        console.log(db)
      } else {

        db.forEach(cuenta => {
          if (user === cuenta.userName && pass === cuenta.password) {
            // console.log(true)
            img = document.querySelector("#succes-icon")
          }
        });
      }

      mostrarImagen(img)
    })

  }

  fetch("../js/user_data.json")
    .then(respuesta => {
      if (respuesta.ok) {
        console.log("Archivo encontrado")
      }
      return respuesta.json()
    })
    .then(data => {

      // console.log(data)
      let formLogin = document.querySelector("#content-login")
      let formSignup = document.querySelector("#content-signup")

      validacionDatos(formLogin, data)
      validacionDatos(formSignup, data)
    })
})