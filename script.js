import { trocarTema,verificarTema } from "./helpers/tema-helper.js"
const buttonTema = document.querySelector(".tema button")
const body = document.querySelector("body")
buttonTema.addEventListener("click",()=>{
    trocarTema(body,buttonTema)
})
verificarTema(body,buttonTema)

const botoesassunto = document.querySelectorAll(".assuntos button")
botoesassunto.forEach(botao =>{
    botao.addEventListener("click", selecionarAssunto)
}
)
function selecionarAssunto(evento){
    const assunto = evento.target.innerText
    localStorage.setItem("assunto",assunto)
    window.location.href = "./pages/quiz/quiz.html"
}