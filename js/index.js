// Funcionalidad al slider:
// - Cada boton desplaza a una imagen en expecifico del slider
// - Cada boton desplaza cierta distancia
// - Intentar que sea escalable. Se debe adaptar a la cantidad de imagenes que se desea poner en la variable imgSlider

// imagenes para el slider promocional
const imgSlider = [
  "./img/img-slider.jpg",
  "./img/img-slider2.jpg",
  "./img/img-slider3.jpg"
]

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

// Agregar funcionalidad al slider y/o tarjetas de Ofertas
// Agregar funcionalidad a las tarjetas de Nuevos articulos
// - El funcionamiento debe ser similar al del productos.html pero de forma horizontal
document.addEventListener("DOMContentLoaded", function () {

  function cambiarSlider(data, move, foco) {
    let desplaza = 100 * 5 / data.length

    foco.indice += move
    // console.log(foco.indice)

    if (foco.indice === data.length / 5 || foco.indice === -1) {
      foco.indice = 0
      // console.log(foco.indice)
    }
    foco.style.transform = `translateX(-${desplaza * foco.indice}%)`
  }

  function crearTarjetas(data, section) {
    // agrego una propiedad llamada indice a foco. Esto es posible con js ya que el lenguaje posee propiedades dinamicas. Ademas nos permite rastrear los indices de una mejor forma
    let foco = section.querySelector(".card-content .card-foco")
    foco.style.width = `${100 * (data.length / 5)}%`
    foco.indice = 0

    data.forEach((articulo) => {
      // Creo las etiquetas
      let article = document.createElement("article")
      let cardImg = document.createElement("div")
      let cardInfo = document.createElement("div")

      let img = document.createElement("img")
      let cardName = document.createElement("h4")
      let cardPrecio = document.createElement("p")
      let cardDesc = document.createElement("p")
      let btn = document.createElement("button")

      // Agrego las clases
      article.classList.add("card")
      cardImg.classList.add("card-img")
      cardInfo.classList.add("card-info")
      cardPrecio.classList.add("card-precio")
      cardDesc.classList.add("card-desc")
      btn.classList.add("btn-ver")

      // Agrego el contenido para las tarjetas
      img.src = articulo.imagen
      img.alt = articulo.nombre
      cardName.textContent = articulo.nombre
      cardPrecio.textContent = `Precio: $${articulo.precio}`
      cardDesc.textContent = `Descripcion: ${articulo.descripcion}`
      btn.textContent = "ver"

      // empiezo a anidar las etiquetas
      cardImg.appendChild(img)
      cardInfo.appendChild(cardName)
      cardInfo.appendChild(cardPrecio)
      cardInfo.appendChild(cardDesc)
      cardInfo.appendChild(btn)

      article.appendChild(cardImg)
      article.appendChild(cardInfo)
      article.style.width = `calc(100% / ${data.length} - 2em)`

      foco.appendChild(article)
    })
    section.querySelector(".prev").addEventListener("click", () => cambiarSlider(data, -1, foco))
    section.querySelector(".next").addEventListener("click", () => cambiarSlider(data, 1, foco))
  }


  // nota: en lo posible mantener la cantidad de articulos, ya sea de ofertas y/o nuevos, divisibles por 5
  fetch("./js/articulos.json")
    .then(respuesta => {
      if (respuesta.ok) {
        console.log("Archivo encontrado")
      }
      return respuesta.json()
    })
    .then(data => {

      let dataOferta = data.filter(art => art.oferta == true)
      let dataNuevo = data.filter(art => art.nuevo == true)

      let sectionOfertas = document.querySelector(".section-ofertas")
      let sectionNuevos = document.querySelector(".section-nuevos")

      crearTarjetas(dataOferta, sectionOfertas)
      crearTarjetas(dataNuevo, sectionNuevos)

    })
})

// Agregar funcionalidad al sroll-to-top
// - El boton debe aparecer cuando scroleo hacia abajo
document.addEventListener("DOMContentLoaded", function () {
  let scrollToTop = document.getElementById("scroll-to-top")

  // muestro u oculto el boton para deslizar hacia arriba
  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTop.style.display = "block"
    } else {
      scrollToTop.style.display = "none"
    }
  })

  // Agrego evento al boton de scroling
  scrollToTop.addEventListener("click", function () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  })
})