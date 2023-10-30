// Creo las etiquetas option necesarias segun la cantidad de opciones que queremos que tenga
// base de datos improvisada
const filtros = {
  categoria: ["calzados", "remeras", "pantalones", "camperas", "accesorios"],
  talle: ["36", "37", "38", "39", "40", "41", "42"],
  marcas: ["nike", "adidas", "stone", "puma", "reebok"],
  genero: ["hombre", "mujer", "todos"]
}
// codigo simplificado usando la base de datos
document.addEventListener("DOMContentLoaded", function () {

  for (let filtro in filtros) {
    const select = document.getElementById(filtro)
    const opciones = filtros[filtro]

    opciones.forEach((opcion, index) => {
      const option = document.createElement("option")
      option.value = opcion
      option.text = opcion[0].toUpperCase() + opcion.slice(1)
      select.appendChild(option)
    })
  }
})

// db_improvisado
//terminar codigo
const db_productos = [
  {
    imagen: "../img/articulos-generales/art-calzado.jpg"
  },
  {}
]