import { trocarTema,verificarTema} from "../../helpers/tema-helper.js"
const buttonTema = document.querySelector(".tema button")
const body = document.querySelector("body")
buttonTema.addEventListener("click",()=>{
    trocarTema(body,buttonTema)
})
verificarTema(body,buttonTema)



const assunto = localStorage.getItem("assunto")
function alterarAssunto(){
const divIcone = document.querySelector(".assunto_icone")
const iconeImg = document.querySelector(".assunto_icone img")
const titulo = document.querySelector(".assunto h1")

divIcone.classList.add(assunto.toLowerCase())
iconeImg.setAttribute("src",`../../assets/img/icon-${assunto.toLowerCase()}.svg`)
iconeImg.setAttribute("alt",`icone de ${assunto}`)
titulo.innerText = assunto
}

alterarAssunto()