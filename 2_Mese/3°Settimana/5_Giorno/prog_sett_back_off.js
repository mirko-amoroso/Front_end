const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZGFhYTgxODQ0MjAwMTUzNzU4OTEiLCJpYXQiOjE3MTUzMjk3MDYsImV4cCI6MTcxNjUzOTMwNn0.4xpO8LLT494FLxIL0urbN6RfM4mcUltESq37iH6V4TE"

class Scarpe {
    constructor(_name, _description, _brand,_imageUrl, _price) {
        this.name = _name
        this.description = _description
        this.brand = _brand
        this.imageUrl = _imageUrl
        this.price = _price
    }
}

const address_scarpa = new URLSearchParams(location.search)
const eventId = address_scarpa.get('eventId') // può esserci o può NON esserci!
console.log('EVENTID?', eventId)

let eventToModify

const get_event_data = () => {
    fetch(`http://striveschool-api.herokuapp.com/api/product/${eventId}`,{
        headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${token}`
        }
    })
        .then((response) => {

            if (response.ok) {
                return response.json()
            } else {
                throw new Error("Errore nel recupero dei dettagli dell'evento")
            }
        })
        .then((event) => {
            console.log('DETTAGLI RECUPERATI', event)
            // ora manipolo il DOM e riempio il form
            document.getElementById('name').value = event.name
            document.getElementById('description').value = event.description
            document.getElementById('price').value = event.price
            document.getElementById('size').value = event.size // tolgo la "Z" dalla data creata a backend

            // salvo una copia di questo event in eventToModify
            eventToModify = event
        })
        .catch((err) => {
            console.log('ERRORE', err)
        })
}

if (eventId) {
    // sono arrivato nella pagina backoffice per modificare un concerto esistente!
    // devo ora RECUPERARE con una GET i dettagli esistenti dell'evento e ripopolare il form
    getEventData()
    // modifichiamo l'etichetta del bottone del form da "CREA!" a "MODIFICA!"
    document.getElementsByClassName('btn-primary')[0].innerText = 'MODIFICA!'
}

const evento_submit = function (e) {
    e.preventDefault()
    // recuperiamo dei riferimenti agli input del form
    const nome_input = document.getElementById('name') // input field del campo name
    const descrizione_input = document.getElementById('description') // input field del campo description
    const prezzo_input = document.getElementById('price') // input field del campo price
    const brand_input = document.getElementById('brand') // input field del campo time

    const ScarpeFromForm = new Scarpe(
        nome_input.value,
        descrizione_input.value,
        brand_input.value,
        prezzo_input.value,
    )
    
    console.log('SCARPE DA INVIARE ALLE API', ScarpeFromForm)

    let URL = "https://striveschool-api.herokuapp.com/api/product"
    let methodToUse = 'POST'

    console.log(eventId)

    if (eventId) {
        URL = `https://striveschool-api.herokuapp.com/api/product/${eventToModify._id}`
        methodToUse = 'PUT'
        console.log("ciao")
    }
    console.log(eventToModify)
    let prova = {
        nome : "mirko",
        description : "amoroso",
        barnd : "nokia",
        imageUrl : "ciaocomestai",
        price : 100,
            // _id :"smekcnekfekemce",
            // userId : "cisokxlme",
            // createdAt : "fjefnenek",
            // updatedAt :"kdededncejc",
            // __v : 0

    }
    fetch(URL, {
        // questo oggetto va indicato qualora l'operazione NON sia la default
        // già il fatto che opereremo una POST e non una GET fa in modo che questo secondo parametro vada dichiarato
        method: methodToUse,
        body: JSON.stringify(prova), // il body in una request è SEMPRE UNA STRINGA
        // body : prova,
        headers: {
            "Authorization": `bearer ${token}`,
            'Content-type': 'application/json' // informiamo le API che (anche se in formato stringa) stiamo inviando un OGGETTO
            // se avessimo un'API protetta, in questo oggetto headers ci andrebbe anche l'autenticazione:
            // Authorization: 'Bearer xxxxxxxxx'
        },
    })
        .then((response) => {
            console.log(response)
            if (response.ok) {
                // il concerto è stato salvato!
                alert(`Scarpa ${eventId ? 'modificato' : 'creato'}!`)
            } else {
                // il concerto NON è stato salvato! -> andare nel network tab del browser e indagare lì
                throw new Error('Errore nel salvataggio della risorsa')
            }
        })
        .catch((err) => {
            console.log('ERRORE', err)
            alert(err)
        })
}

document.getElementById('event_form').addEventListener('submit', evento_submit)