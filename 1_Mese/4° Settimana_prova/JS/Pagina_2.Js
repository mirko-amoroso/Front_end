// FUNZIONE CHE PERMETTE DI ANDARE AVANTI DALLA PAG.1 ALLA PAG.2
const successivo = () => {

    const pagSucc = document.querySelector('.BottoneProceed');

    pagSucc = location.href = "./pagina_2.html";
}


const questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
];

/* ++++++++ - MISCHIA FUNZIONE - ++++++++ */

const mischia = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const n = Math.floor(Math.random() * (i + 1));
        [array[i], array[n]] = [array[n], array[i]];
    }
    return array
}

mischia(questions)


/* +++++++++++ - OTTIENI CRONOMETRO - +++++++++++ */

let tempo = 0;
document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const difficolta = params.get('difficolta'); // Ottiene il valore di 'difficolta' passato dal form

    if (difficolta) {
        tempo = (parseInt(difficolta, 10));
    }
    console.log(tempo)
});


/* +++++++++++ - TIMER - +++++++++++ */


let timerInterval = null;
let timePassed = 0;


function startTimer() {
    timerInterval = setInterval(() => {
        const cerchio = document.querySelector(".cerchio_base");
        // Il quantitativo di tempo passato incrementa di 1
        timePassed = timePassed + 1;

        //Aggiorniamo il tempo rimanente e lo pushiamo nell'html
        const timeLeft = tempo - timePassed;
        if (n < questions.length)
            document.getElementById("base-timer-label").innerHTML = timeLeft;

        if (cerchio) {
            if (timeLeft >= 25) {
                cerchio.classList.remove("base-timer__path-elap");
                cerchio.classList.add("base-timer__path-elapsed")
            } if (timeLeft <= 25) {
                cerchio.classList.remove("base-timer__path-elapsed");
                cerchio.classList.add("base-timer__path-elap");
            }
        }

        // Fermi il timer quando il tempo arriva a 0
        if (timeLeft == 0) {
            // n += 1
            inserisci_domanda(questions)
            //clearInterval(timerInterval);
        }
        if (n == questions.length && timeLeft == 0) {
            clearInterval(startTimer)
            const tutto = document.getElementById("contenitore_di_tutto")
            tutto.innerHTML = '';
            risultato_finale_positivo = risultato_finale * 10
            risultato_finale_negativo = (10 - risultato_finale) * 10
            scrivi_risultati(risultato_finale, risultato_finale_positivo, risultato_finale_negativo)
            drawChart(risultato_finale_positivo, risultato_finale_negativo)
            stop();
            return timePassed;
        }
    }, 1000);
    return timePassed;
}

document.getElementById("timer").innerHTML =
    `<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="cerchio_base" cx="50" cy="50" r="45" />
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">
  ${tempo}
  </span>
</div>
`


/* ++++++++++++ - FUNZIONE CHE PULISCE E PRENDE LE DOMANDE E LE RISPOSTE - ++++++++++++ */

var n = 0
var risultato_finale = 0
var risultato_finale_positivo = 0
var risultato_finale_negativo = 0

const inserisci_domanda = (array) => {
    const area_domanda = document.getElementById("domanda")
    const luogo_risposte = document.getElementById('risposte');

    if (n < array.length) {
        luogo_risposte.innerHTML = ''; // Pulisci le risposte precedenti prima di aggiungere nuove
        timePassed = 0
        area_domanda.innerText = array[n].question;
        const domanda_corrente = array[n]
        n++;
        const question = document.getElementById("numero_domanda")
        question.innerHTML = `QUESTION  ${n} <span id = "colore_del_dieci">  / 10  </span>`
        const risposte = [domanda_corrente.correct_answer, ...domanda_corrente.incorrect_answers];

        mischia(risposte);

        risposte.forEach((risposta) => {
            const forma = document.createElement('button');
            forma.classList.add("bottoni_risposte")
            forma.innerText = risposta;
            luogo_risposte.appendChild(forma);

            forma.addEventListener("click", () => {
                if (risposta === domanda_corrente.correct_answer) {
                    risultato_finale += 1; // Incrementa il punteggio se la risposta è corretta
                }
                if (n < array.length) {
                    inserisci_domanda(array); // Richiama la funzione per la prossima domanda
                }
                else {
                    /* puliamo tutto e mettiamo l'ultima pagina*/
                    clearInterval(startTimer)
                    const tutto = document.getElementById("contenitore_di_tutto")
                    tempo = 0;
                    tutto.innerHTML = '';
                    risultato_finale_positivo = risultato_finale * 10
                    risultato_finale_negativo = (10 - risultato_finale) * 10
                    scrivi_risultati(risultato_finale, risultato_finale_positivo, risultato_finale_negativo)
                    drawChart(risultato_finale_positivo, risultato_finale_negativo)
                    risposte_giuste(questions)
                    stop();
                }
            })
        })
    }
}
inserisci_domanda(questions)
startTimer()


/* ++++++++++++ - PAGINA TRE RISULTATO - ++++++++++++ */

const scrivi_risultati = (risultato_finale, risultato_finale_positivo, risultato_finale_negativo) => {
    const titolo_risultato = document.getElementById("titolo_risultato");
    titolo_risultato.innerHTML = "Results"
    const sotto_titolo = document.getElementById("sotto_titolo");
    sotto_titolo.innerHTML = "The summary of your answers:";
    const risultati_positivi = document.getElementById("risultati_positivi");
    risultati_positivi.innerHTML =
        `<h2 class= "risultati">Correct<br>
    ${risultato_finale_positivo} % 
    </h2>
    <p> ${risultato_finale} / 10 questions </p>
    `

    const risultati_negativi = document.getElementById("risultati_negativi");
    risultati_negativi.innerHTML =
        `<h2 class= "risultati"> Wrong<br>
    ${risultato_finale_negativo} % 
    </h2>
    <p> ${10 - risultato_finale}  / 10 questions </p>
    `
    print_stringa(risultato_finale_positivo)
    const bottone_pag_4 = document.createElement("a");
    bottone_pag_4.setAttribute("href", "./Pagina_4.html")
    bottone_pag_4.remove()
    bottone_pag_4.innerText = "RATE US"
    bottone_pag_4.classList.add("BottoneProceed")
    const contenitore_bottone = document.getElementById("area_bottone");
    contenitore_bottone.appendChild(bottone_pag_4)
}


//FUNZIONE CHE CREA IL GRAFICO

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart(x, y) {

    var data = google.visualization.arrayToDataTable([
        ['Effort', 'Amount given'],
        ['Correct', x],
        ['Wrong', y],
    ]);


    var options = {
        pieHole: 0.5,
        'width': 800,
        'height': 300,
        'backgroundColor': 'transparent',
        pieSliceTextStyle: {
            color: "transparent",
        },

        // PERMETTE DI CAMBIARE COLORE
        slices: {
            0: { color: '#00FFFF' },
            1: { color: 'purple' }
        },

        legend: 'none',
    };

    var chart = new google.visualization.PieChart(document.getElementById('cerchio_risultati'));
    chart.draw(data, options);
}


// FUNZIONE CHE PPRINTA LA IN BASE AL SUCCESSO O MENO
const print_stringa = (x) => {
    const superato = document.getElementById("superato_o_no")
    if (x >= 60) {
        superato_o_no.innerHTML = "Congratulation!";
    } else {
        superato_o_no.innerHTML = "You didn't pass the test";
    }
}

// FUNZIONE CHE ERMETTE DI PRINTARE LE DOMANDE CON LA PRORPIA RISPOSTA
const risposte_giuste = (array) => {
    const risposte = document.getElementById("lista_risposte");
    // array.forEach((element) => {  // chiedi a fede ;) perche non funziona
    let lista = document.createElement("dl")
    risposte.appendChild(lista)
    for (let element = 0; element < array.length; element++) {
        let domanda = document.createElement("dt");
        domanda.innerText = array[element].question
        lista.appendChild(domanda)
        let risposta_giusta = document.createElement("dd");
        risposta_giusta.innerText = array[element].correct_answer
        lista.appendChild(risposta_giusta)
    }
}

