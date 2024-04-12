const generateMainBoard = function () {
    const  position_celle = document.getElementById("tabella");
    for(let i = 1; i < 77 ; i++) {                                  // funzione che crea il tabellone
        const create_cella = document.createElement("div")
        create_cella.innerHTML = i
        create_cella.classList.add("cella")
        create_cella.id = i
        position_celle.appendChild(create_cella)
    }
}

const fillArray = function () {
    // inserire in un array
}
var urray_con_numeri = []

const getRandomNum = function () {
    let numero_random = Math.floor(Math.random() * 77) // generare un numero random
    urray_con_numeri.forEach((num) => {
        if (num === numero_random){
            numero_random = getRandomNum()
        }
    })
    urray_con_numeri.push(numero_random)
    return numero_random
}

const colora_cella = (numero_random) => {
    const la_cella = document.getElementById(numero_random);
    la_cella.classList.add("nuovo_colore")
}

const generateRandNumber = function () {
    const numero_random = getRandomNum()     // stampare il numero
    const cella_numero = document.getElementById("numero_uscito");   // associare la classe...
    cella_numero.innerHTML= numero_random  //scrivo il numero uscito
    colora_cella(numero_random)
}
const bottone = document.querySelector("#bottone_1")
bottone.addEventListener('click', generateRandNumber)

const generateUserBoards = function () {
    // genera e gestisce le tabelline
}

getRandomNum()
generateMainBoard()