// Funcionalidad al slider:
// - Cada boton desplaza a una imagen en expecifico del slider
// - Cada boton desplaza cierta distancia
// - Intentar que sea escalable. Se debe adaptar a la cantidad de imagenes que se desea poner en el slider

// imagenes para el slider
const imgSlider = [
  "../img/img-slider.jpg",
  "../img/img-slider2.jpg",
  "../img/img-slider3.jpg"
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
