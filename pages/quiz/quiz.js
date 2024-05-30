import { trocarTema, verificarTema } from "../../helpers/tema-helper.js";
const buttonTema = document.querySelector(".tema button");
const body = document.querySelector("body");
const assunto = localStorage.getItem("assunto");

let quiz = {};
let pontos = 0;
let pergunta = 1;

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
                    <input type="radio" id="alternativa_A" name="alternativa">
                    <div>
                        <span>A</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[0])}
                    </div>
                </label>
                <label for="alternativa_B">
                    <input type="radio" id="alternativa_B" name="alternativa">
                    <div>
                        <span>B</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[1])}
                    </div>
                </label>
                <label for="alternativa_C" >
                    <input type="radio" id="alternativa_C" name="alternativa">
                    <div>
                        <span>C</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[2])}
                    </div>
                </label>
                <label for="alternativa_D">
                    <input type="radio" id="alternativa_D" name="alternativa">
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
async function iniciar(){
    alterarAssunto()
    await buscarPerguntas()
    montarPergunta()
}
iniciar()