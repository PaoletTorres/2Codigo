let formulario = document.querySelector("#form")

formulario.onsubmit = function(e) {

  e.preventDefault(); // De acuerdo a la documentación de prevent() no existe en event, es por eso que se le pone Default 
  
    let n = formulario.querySelector("[name = `name`]");  // se cambia var por let ya que var ya no se usa comunmente 
    let e = formulario.querySelector("[name = `age`]");
    let na = formulario.querySelector("[name = `nationality`]"); // Decicú implementar querySelector porque si cambia el orden en el HTMl ya no generiía problema, ya que se estaba llamndo por la posición en que se encontraba. 

    let nombre = n.value
    let edad = e.value

    let i = na.selectedIndex
    let nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

    let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
    let corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

    if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
    else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
    else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
    else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  let lista = document.getElementById("lista-de-invitados") // se está validando que lista de invitados exista antes de llamarla 
    if (lista){
    lista.appendChild(elementoLista);
  } else {
    console.error("No se encontró `lista-de-invitados`"); 
  }

  let elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista") // no existe .added
  lista.appendChild(elementoLista)

  let spanNombre = document.createElement("span")
  let inputNombre = document.createElement("input")
  let espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
  let spanNombre = document.createElement("span")
  let inputNombre = document.createElement("input")
  let espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}


crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


  let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar" 

  let corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
    elementoLista.remove() // hice este cambio porque quiero eliminar toda la tarjeta del invitado y no sólo el botón. 
  }
}