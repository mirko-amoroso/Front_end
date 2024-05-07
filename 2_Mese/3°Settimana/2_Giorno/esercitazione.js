const bottone_1 = document.getElementById("primo_bottone")

const bottone_2 = document.getElementById("secondo_bottone")

const input_nome_utente = document.getElementById("nome")

const luogo_inserimento_testo = document.getElementById("luogo_inserimento_testo")

const salva = () => {
    console.log("salva")
    let nome_utente = input_nome_utente.value
    localStorage.setItem("lista_input", nome_utente)
    console.log(nome_utente)
    luogo_inserimento_testo.innerText = nome_utente
    input_nome_utente.value = ""
}

const rimuovi = () => {
    console.log("rimuovi")
    localStorage.removeItem("lista_input")
    luogo_inserimento_testo.innerText = ""
}

const contatore = document.getElementById("contatore")

let tempo = 0
const timer = () => {
    if (sessionStorage.getItem("tempo")) {
        tempo = JSON.parse(sessionStorage.getItem("tempo"))
        tempo += 1
        sessionStorage.setItem("tempo", tempo)
        console.log(tempo)
        contatore.innerText = tempo
    }
    else {
        sessionStorage.setItem("tempo", tempo)
    }
}

setInterval(timer, 1000)