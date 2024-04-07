/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

// function funzione_1(array) 
// {for(i = 0 ; i < array.length; i += 1) {
//   console.log(pets[i])}
// }
// funzione_1(pets)
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
// let pets_ordinata = pets.sort()
// console.log(pets_ordinata)

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
// let pets_ordinata_contario = pets.reverse()
// console.log(pets_ordinata_contario)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
/*function funzione_2(array){
  array.push(array[0])
  array.shift()
  console.log(array)
}
funzione_2(pets)*/

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

// function funzione_3(array) {
//   for (i = 0; i < array.length; i += 1) {
//     array[i]["licensePlate"] = i
//   }
//   console.log(array)
// }
// funzione_3(cars)
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
// function funzione_4(array) {
//   array.push({
//     brand: 'Lancia',
//     model: 'Delta',
//     color: 'white',
//     trims: ['allure', 'GT'],
//   })
//   for (i = 0; i < array.length; i += 1) {
//     array[i]["trims"].pop()
//   }
//   console.log(array)
// }
// funzione_4(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
// const justTrims = []

// function funzione_5(array) {
//   for (i = 0; i < array.length; i += 1) {
//     justTrims.push(array[i]["trims"][0])
//   }
//   console.log(justTrims)
// }
// funzione_5(cars)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

// function funzione_6(array) {
//   for(i = 0; i < array.length; i += 1) {
//     if (array[i]["color"][0] == "b") {
//       console.log("Fizz");
//     }
//     else {
//       console.log("Buzz")
//     }
//   }
// }
// funzione_6(cars)

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

// function funzione_7(array) {
//   let i = 0
//   while (array[i] != 32) {
//     console.log(array[i])
//     i += 1
//   }
// }

// funzione_7(numericArray)

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

function funzione_8(array) {
  let nuova_array = []
  for (i = 0; i < array.length; i += 1) {
    switch (array[i].toLowerCase()) {
      case "a":
        nuova_array.push(1)
        break;
      case "b":
        nuova_array.push(2)
        break;
      case "c":
        nuova_array.push(3)
        break;
      case "d":
        nuova_array.push(4)
        break;
      case "e":
        nuova_array.push(5)
        break;
      case "f":
        nuova_array.push(6)
        break;
      case "g":
        nuova_array.push(7)
        break;
      case "h":
        nuova_array.push(8)
        break;
      case "i":
        nuova_array.push(9)
        break;
      case "l":
        nuova_array.push(10)
        break;
      case "m":
        nuova_array.push(11)
        break;
      case "n":
        nuova_array.push(12)
        break;
      case "o":
        nuova_array.push(13)
        break;
      case "p":
        nuova_array.push(14)
        break;
      case "q":
        nuova_array.push(15)
        break;
      case "r":
        nuova_array.push(16)
        break;
      case "s":
        nuova_array.push(17)
        break;
      case "t":
        nuova_array.push(18)
        break;
      case "u":
        nuova_array.push(19)
        break;
      case "v":
        nuova_array.push(20)
        break;
      case "z":
        nuova_array.push(21)
        break;
      default:
        console.log("non conosco questa lettera")
    }
  }
  console.log(nuova_array)
}

funzione_8(charactersArray)