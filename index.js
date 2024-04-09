let formulario = document.getElementById("formulario")

let inputText = document.getElementById("textoGraffiti")
let inputColor = document.getElementById("colorGraffiti")
let boton = document.getElementsByClassName("boton")
let wall = document.getElementById("wall")


formulario.addEventListener("submit", event => {
  event.preventDefault();
  
  wall.innerHTML += `<div class="text-xl flex flex-wrap break-all items-center justify-center w-[200px] h-[200px] p-4 bg-[${inputColor.value}]"> ${inputText.value}

  </div>`
  
  limpiarInputs()
})


let limpiarInputs = () => {
    inputText.value = ""
    inputColor.value = "#000000"
}

let pedirGraffiti = () => console.log(graffiti);