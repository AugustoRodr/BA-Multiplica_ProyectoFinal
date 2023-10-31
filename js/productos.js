// Creo las etiquetas option necesarias segun la cantidad de opciones que queremos que tenga
// base de datos improvisada
const filtros = {
  categoria: ["calzados", "remeras", "pantalones", "camperas", "accesorios"],
  talle: ["36", "37", "38", "39", "40", "41", "42"],
  marcas: ["nike", "adidas", "stone", "puma", "reebok", "lecoqsportif"],
  genero: ["hombre", "mujer", "todos"]
}
// codigo simplificado usando la base de datos
document.addEventListener("DOMContentLoaded", function () {

  for (let filtro in filtros) {
    const select = document.getElementById(filtro)
    const opciones = filtros[filtro]

    opciones.forEach((opcion) => {
      const option = document.createElement("option")
      option.value = opcion
      option.text = opcion[0].toUpperCase() + opcion.slice(1)
      select.appendChild(option)
    })
  }
})

// db_improvisado
//terminar codigo
const dbProductos = [
  {
    imagen: "../img/articulos-generales/art-calzado.jpg",
    nombre: "Zapatilla Nike",
    descripcion: "Zapatilla nike blanco con negro. Talles desde 36 al 43",
    precio: 1100,
    marca: "nike",
    talle: 37,
    genero: "unisex"
  },
  {
    imagen: "../img/articulos-generales/art-calzado2.jpg",
    nombre: "Calzado Le Coq Sportif",
    descripcion: "Zapatilla Le Coq Sportif. Modelos con talle desde 40 al 43",
    precio: 1566.5,
    marca: "lecoqsportif",
    talle: 40,
    genero: "unisex"
  },
  {
    imagen: "../img/articulos-generales/art-calzado3.jpg",
    nombre: "Nike Goretex",
    descripcion: "Calzado Nike Goretex, modelos con talles del 39 al 42",
    precio: 16600,
    marca: "nike",
    talle: 41,
    genero: "unisex"
  },
  {
    imagen: "../img/articulos-generales/art-calzado4.jpg",
    nombre: "Calzado Adidas",
    descripcion: "Calzado Adidas rojo con blanco, modelos con talles del 39 al 42",
    precio: 14600,
    marca: "adidas",
    talle: 41,
    genero: "unisex"
  }
]

let indiceMostrados = 0

// document.addEventListener("DOMContentLoaded", function () {
//   const contenedor= document.getElementById("cards-content")
//   const prodMostrados= dbProductos.slice(indiceMostrados,indiceMostrados+2)

//   prodMostrados.forEach((producto) => {
//     const card=document.createElement("article")
//   })
// })

document.addEventListener("DOMContentLoaded", function () {
  // const contenedor = document.getElementById("cards-content").querySelectorAll(".card")
  const tarjetas = document.getElementById("cards-content").querySelectorAll(".card")
  // console.log(contenedor)
  for (let i = 0; i < tarjetas.length; i++) {
    tarjetas[i].querySelector("#img-card").src = dbProductos[i].imagen
    tarjetas[i].querySelector("#card-nombre").textContent = dbProductos[i].nombre
    tarjetas[i].querySelector("#card-desc").textContent = dbProductos[i].descripcion
    tarjetas[i].querySelector("#card-precio").textContent = `Precio: $${dbProductos[i].precio}`
  }
})