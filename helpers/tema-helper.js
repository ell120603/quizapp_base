let tema = "light"
export function trocarTema(body,buttonTema){
    if(localStorage.getItem("tema")){
        tema = localStorage.getItem("tema")
    }
    if(tema === "light"){
        body.classList.add("dark")
        localStorage.setItem("tema","dark")
        buttonTema.style.justifyContent = "flex-end"
    }else{
        body.classList.remove("dark")
        localStorage.setItem("tema","light")
        buttonTema.style.justifyContent = "flex-start"
    }
}
export function verificarTema(body,buttonTema){
    if(localStorage.getItem("tema")){
        tema = localStorage.getItem("tema")
    }
    if(tema === "dark"){
        body.classList.add("dark")
        buttonTema.style.justifyContent = "flex-end"
    }
}