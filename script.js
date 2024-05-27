let tema = "light"
const buttonTema = document.querySelector(".tema button")
buttonTema.addEventListener("click",trocarTema)
const body = document.querySelector("body")
function trocarTema(){
    if(localStorage.getItem("tema")){
        tema = localStorage.getItem("tema")
    }
    if(tema === "light"){
        body.classList.add("dark")
        localStorage.setItem("tema","dark")
    }else{
        body.classList.remove("dark")
        localStorage.setItem("tema","light")
    }
}
function verificarTema(){
    if(localStorage.getItem("tema")){
        tema = localStorage.getItem("tema")
    }
    if(tema === "dark"){
        body.classList.add("dark")
    }

}
verificarTema()