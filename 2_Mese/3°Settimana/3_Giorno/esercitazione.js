// https://striveschool-api.herokuapp.com/books

let array_riga = []
let contatore = 0

const contenitore = document.getElementById("contenitore")

const prendo_list_libri = function () {
    fetch('https://striveschool-api.herokuapp.com/books')
        .then((response) => response.json())
        .then((lista_libri) => {
            const righe = document.createElement("div")
            righe.classList.add("row");
            for (i = 0; i < lista_libri.length; i++) {
                const card = document.createElement("div")
                card.classList.add("col-md-4","card")

                const immagine = document.createElement("img")
                immagine.src = lista_libri[i]["img"]
                immagine.classList.add("card-img-top")

                const body_card = document.createElement("div")
                body_card.classList.add("card-body")

                const titolo = document.createElement("h5")
                titolo.innerHTML = lista_libri[i]["title"]
                titolo.classList.add("card-title")
                body_card.appendChild(titolo)
                console.log(lista_libri[i]["title"])

                const prezzo = document.createElement("p")
                prezzo.innerHTML = lista_libri[i]["price"]
                prezzo.classList.add("card-text")
                body_card.appendChild(prezzo)

                card.appendChild(body_card)
                card.appendChild(immagine)
                righe.appendChild(card)
                contatore += 1
                if (contatore === 3) {
                    contenitore.appendChild(righe)
                    righe = document.createElement("div")
                    righe.classList.add("row");
                    contatore = 0

                }
            }
        })
        .catch((err) => {
            // bad ending!
            // c'è stato un errore e non siamo riusciti a contattare il server!
            // abbiamo internet? il server va a fuoco?
            console.log('ERRORE', err)
        })
}

