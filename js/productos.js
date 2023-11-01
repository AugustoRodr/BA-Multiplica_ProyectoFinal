// Creo las etiquetas option necesarias segun la cantidad de opciones que queremos que tenga
// base de datos improvisada
const filtros = {
  categoria: ["calzados", "remeras", "pantalones", "camperas", "accesorios"],
  talle: ["36", "37", "38", "39", "40", "41", "42"],
  marcas: ["nike", "adidas", "stone", "puma", "reebok", "lecoqsportif", "otros"],
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
  },
  {
    imagen: "../img/articulos-generales/art-campera.jpg",
    nombre: "Campera con friza",
    descripcion: "Campera con friza en colo gris, rojo, negro y blanco. Talles desde L al XXL",
    precio: 8800,
    marca: "otros",
    talle: 41,
    genero: "hombre"
  },
  {
    imagen: "../img/articulos-generales/art-campera2.jpg",
    nombre: "Campera Bomber",
    descripcion: "Campera Bomber para hombre color negro talles desde M al XXL",
    precio: 14600,
    marca: "otros",
    talle: 41,
    genero: "hombre"
  },
  {
    imagen: "../img/articulos-generales/art-campera3.jpg",
    nombre: "Camperas rompe viento Nike",
    descripcion: "Camperas Nike rompe viento varios modelos y talles desde M a XL",
    precio: 4600,
    marca: "nike",
    talle: 41,
    genero: "hombre"
  },
  {
    imagen: "../img/articulos-generales/art-campera4.jpg",
    nombre: "Chaleco rompe viento",
    descripcion: "Chaleco rompe viento en mofelos negro, girs y azul oscuro. Talles XL,XXL y XXXL",
    precio: 5600,
    marca: "otros",
    talle: 41,
    genero: "hombre"
  },
  {
    imagen: "../img/articulos-generales/art-campera4.jpg",
    nombre: "Chaleco rompe viento",
    descripcion: "Chaleco rompe viento en mofelos negro, girs y azul oscuro. Talles XL,XXL y XXXL",
    precio: 5600,
    marca: "otros",
    talle: 41,
    genero: "hombre"
  }
]


let indiceMostrados = 0

function mostrarProductos(inicio, productos = dbProductos) {
  const tarjetas = document.querySelectorAll(".card")

  for (let i = 0; i < 4; i++) {
    const producto = productos[inicio + i]
    const tarjeta = tarjetas[i]
    if (producto) {
      // tarjeta.style.display = "block"
      const img = tarjeta.querySelector("#img-card")
      const nombre = tarjeta.querySelector("#card-nombre")
      const desc = tarjeta.querySelector("#card-desc")
      const precio = tarjeta.querySelector("#card-precio")

      img.src = producto.imagen
      nombre.textContent = producto.nombre
      desc.textContent = producto.descripcion
      precio.textContent = `Precio: $${producto.precio.toFixed(2)}`
    }
    // en caso de que no haber mas productos para mostrar cambio el display de las tarjetas para que no se muestren 
    else {
      const tarjeta = tarjetas[i]
      tarjeta.style.display = "none"
    }
  }
}

function prodSiguiente(productos = dbProductos) {
  if (indiceMostrados + 4 < productos.length) {
    indiceMostrados += 4
    mostrarProductos(indiceMostrados)
  }
}

function prodAnterior() {
  if (indiceMostrados >= 4) {
    indiceMostrados -= 4
    mostrarProductos(indiceMostrados)
  }
  //en caso de que quiera retroceder en los productos mostrados verifico que haya tarjetas ocultas. Si los hay los muestro
  const tarjetas = document.querySelectorAll(".card");
  tarjetas.forEach((tarjeta) => {
    if (tarjeta.style.display === "none") {
      tarjeta.style.display = "flex"
    }
  })
}


// Evento. Carga la info de los primeros productos
document.addEventListener("DOMContentLoaded", mostrarProductos(indiceMostrados))

// Evento. Carga los siguentes productos
const btnSig = document.getElementById("siguiente")
btnSig.addEventListener("click", () => {
  prodSiguiente()
})

const btnAnt = document.getElementById("anterior")
btnAnt.addEventListener("click", () => {
  prodAnterior()
})

