import { trocarTema,verificarTema } from "./helpers/tema-helper"
const buttonTema = document.querySelector(".tema button")
const body = document.querySelector("body")
buttonTema.addEventListener("click",()=>{
    trocarTema(body,buttonTema)
})
verificarTema(body,buttonTema)