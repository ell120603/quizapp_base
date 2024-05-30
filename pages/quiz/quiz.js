import { trocarTema, verificarTema } from "../../helpers/tema-helper.js";
const buttonTema = document.querySelector(".tema button");
const body = document.querySelector("body");
const assunto = localStorage.getItem("assunto");

let quiz = {};
let pontos = 0;
let pergunta = 1;
let resposta = ""
let idInputResposta = ""
let respostaCorretaID = ""
buttonTema.addEventListener("click", () => {
  trocarTema(body, buttonTema);
});
verificarTema(body, buttonTema);

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


async function buscarPerguntas() {
  const urlDados = "../../data.json";
  await fetch(urlDados)
    .then((resposta) => resposta.json())
    .then((dados) => {
      dados.quizzes.forEach((dado) => {
        if (dado.title === assunto) {
          quiz = dado;
        }
      });
    });
}

function montarPergunta() {
  const main = document.querySelector("main");
  main.innerHTML = `
        <section class="pergunta">
        <div>
            <p>Questão ${pergunta} de 10</p>
            <h2>${quiz.questions[pergunta-1].question}</h2>
        </div>
            <div class="barra_progresso">
                <div style="width:${pergunta*10}%"></div>
            </div>
        </section>
        <section class="alternativas">
            <form action="">
                <label for="alternativa_A">
                    <input type="radio" id="alternativa_A" name="alternativa" value="${alterarSinais(quiz.questions[pergunta-1].options[0])}">
                    <div>
                        <span>A</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[0])}
                    </div>
                </label>
                <label for="alternativa_B">
                    <input type="radio" id="alternativa_B" name="alternativa" value="${alterarSinais(quiz.questions[pergunta-1].options[1])}">
                    <div>
                        <span>B</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[1])}
                    </div>
                </label>
                <label for="alternativa_C" >
                    <input type="radio" id="alternativa_C" name="alternativa" value="${alterarSinais(quiz.questions[pergunta-1].options[2])}">
                    <div>
                        <span>C</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[2])}
                    </div>
                </label>
                <label for="alternativa_D">
                    <input type="radio" id="alternativa_D" name="alternativa" value="${alterarSinais(quiz.questions[pergunta-1].options[3])}">
                    <div>
                        <span>D</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[3])}
                    </div>
                </label>
            </form>
            <button>Enviar</button>
        </section>`
}
function alterarSinais(texto){
    return texto.replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
function guardarResposta(evento){
    resposta = evento.target.value
    idInputResposta = evento.target.id
    const buttonEnviar = document.querySelector(".alternativas button")
    buttonEnviar.addEventListener("click",validarResposta)
}
function validarResposta(){
    if(resposta === quiz.questions[pergunta-1].answer){
        document.querySelector(`label[for='${idInputResposta}']`).setAttribute("id","certo")
        pontos = pontos+1
    }else{
        document.querySelector(`label[for='${idInputResposta}']`).setAttribute("id","errado")
        document.querySelector(`label[for='${respostaCorretaID}']`).setAttribute("id","certo")
    }
}
async function iniciar(){
    alterarAssunto()
    await buscarPerguntas()
    montarPergunta()

    const inputsResposta = document.querySelectorAll(".alternativas input")
    inputsResposta.forEach(input=>{
        input.addEventListener("click",guardarResposta)

        if(input.value === quiz.questions[pergunta-1].answer){
            respostaCorretaID == input.id
        }
    })
}

iniciar()