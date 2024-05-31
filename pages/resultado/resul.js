import { trocarTema,verificarTema} from "../../helpers/tema-helper.js"
const buttonTema = document.querySelector(".tema button")
const body = document.querySelector("body")
const assunto = localStorage.getItem("assunto");
const botaoJogarNovamente = document.querySelector("main button")
buttonTema.addEventListener("click",()=>{
    trocarTema(body,buttonTema)
})
botaoJogarNovamente.addEventListener("click",jogarNovamente)
verificarTema(body,buttonTema)
///tema
function alterarAssunto() {
    const divIcone = document.querySelector(".assunto_icone");
    const iconeImg = document.querySelector(".assunto_icone img");
    const titulo = document.querySelector(".assunto h1");
  
    divIcone.classList.add(assunto.toLowerCase());
    iconeImg.setAttribute(
      "src",
      `../../assets/img/icon-${assunto.toLowerCase()}.svg`
    );
    iconeImg.setAttribute("alt", `icone de ${assunto}`);
    titulo.innerText = assunto;
  }
  alterarAssunto()
  function inserirResultado(){
    const sectionPontuacao = document.querySelector(".pontuacao")
    const divAssunto = document.querySelector(".assunto")
    const pontos = localStorage.getItem("pontos")
    sectionPontuacao.innerHTML = `
    ${divAssunto.outerHTML}
    <strong>${pontos}</strong>
    <p>de 10</p>
    `
  }
  function jogarNovamente(){
    localStorage.removeItem("pontos")
    localStorage.removeItem("assunto")
    window.location.href = "../../index.html"

  }
  inserirResultado()