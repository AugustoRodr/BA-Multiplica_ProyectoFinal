// Funcionalidad al slider:
// - Cada boton desplaza a una imagen en expecifico del slider
// - Cada boton desplaza cierta distancia
// - Intentar que sea escalable. Se debe adaptar a la cantidad de imagenes que se desea poner en el slider

// imagenes para el slider
const imgSlider = [
  "./img/img-slider.jpg",
  "./img/img-slider2.jpg",
  "./img/img-slider3.jpg"
]

// Evento cuando carga la pagina
document.addEventListener("DOMContentLoaded", function () {
  const sectionSlider = document.getElementById("foco")
  const puntosSlider = document.getElementById("puntos")
  sectionSlider.style.width = `${100 * imgSlider.length}%`

  imgSlider.forEach((imgUrl, i) => {
    const img = document.createElement("img")
    img.src = imgUrl
    img.alt = `imagen-promocional${i}`
    // asigno el width a cada img. No encontre otra forma para que sea escalable
    img.style.width = `calc(100%/${imgSlider.length} - 4.1em)`
    sectionSlider.appendChild(img)

    const item = document.createElement("li")
    item.classList.add("punto")
    if (i === 0) {
      item.classList.add("activo")
    }
    puntosSlider.appendChild(item)

    // Doy funcionalidad a cada boton pero solo se ejecuta cuando se haga click. De esta forma es escalable
    item.addEventListener("click", () => {
      let move = 100 / imgSlider.length
      sectionSlider.style.transform = `translate(-${move * i}%)`

      let puntos = document.querySelectorAll(".punto")

      puntos.forEach((punto) => {
        punto.classList.remove("activo")
      })
      item.classList.add("activo")
    })
  })
})


// testeo de manejo de json
// let jsonData
// fetch("./js/articulos.json")
//   .then(respuesta => {
//     if (respuesta.ok) {
//       console.log("Archivo encontrado")
//     }
//     return respuesta.json()
//   })
//   .then(data => {
//     jsonData = data
//     // console.log(jsonData)
//     let etiqueta = document.getElementById("productos")
//     jsonData.forEach((data, i) => {
//       let text = document.createElement("h1")
//       text.textContent = `${data.nombre}`
//       etiqueta.appendChild(text)
//     })
//   })

// Agregar funcionalidad al slider y/o tarjetas de Ofertas
// - El funcionamiento debe ser similar al del productos.html pero de forma horizontal

document.addEventListener("DOMContentLoaded", function () {
  fetch("./js/articulos.json")
    .then(respuesta => {
      if (respuesta.ok) {
        console.log("Archivo encontrado")
      }
      return respuesta.json()
    })
    .then(data => {
      console.log(data)
      let cardFoco = document.querySelector(".card-foco")
      data.forEach((articulo, i) => {
        if (articulo.oferta == true) {
          console.log(articulo)
          // segun el maquetado hecho en html, probado con anterioridad, creo y anido las etiquetas una dentro de la otra y agrego sus clases respectivas
          let article = document.createElement("article")
          let cardImg = document.createElement("div")
          let cardInfo = document.createElement("div")

          let img = document.createElement("img")
          let cardPrecio = document.createElement("p")
          let cardDesc = document.createElement("p")
          let btn = document.createElement("button")

          article.classList.add("card")
          cardImg.classList.add("card-img")
          cardInfo.classList.add("card-info")
          cardPrecio.classList.add("card-precio")
          cardDesc.classList.add("card-desc")
          btn.classList.add("btn-ver")

          img.src = articulo.imagen
          img.alt = articulo.nombre
          cardPrecio.textContent = `Precio: $${articulo.precio}`
          cardDesc.textContent = `Descripcion: ${articulo.descripcion}`
          btn.textContent = "ver"

          // empiezo a anidar las etiquetas
          cardImg.appendChild(img)
          cardInfo.appendChild(cardPrecio)
          cardInfo.appendChild(cardDesc)
          cardInfo.appendChild(btn)

          article.appendChild(cardImg)
          article.appendChild(cardInfo)

          cardFoco.appendChild(article)
        }
      })
    })
})

// Agregar funcionalidad a las tarjetas de Nuevos articulos