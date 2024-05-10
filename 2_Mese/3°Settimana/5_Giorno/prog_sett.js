// https://striveschool-api.herokuapp.com/api/product/

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZGFhYTgxODQ0MjAwMTUzNzU4OTEiLCJpYXQiOjE3MTUzMjk3MDYsImV4cCI6MTcxNjUzOTMwNn0.4xpO8LLT494FLxIL0urbN6RfM4mcUltESq37iH6V4TE"

const carica_img = () => {
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
            Authorization: `bearer ${token}`,
        },
    })
        .then((response) => {
            console.log('RESPONSE PEXELS', response)
            if (response.ok) {
                console.log("ciao")
                return response.json()
            } else {
                throw new Error('si è verificato un errore')
            }
        })
        .then((data) => {
            // data.photos
            // troviamo tutte le immagini delle card
            const TheCardImgs = document.querySelector('.card img')
            // ciclo queste immagini
            TheCardImgs.setAttribute('src', data.photos.src.medium)
            changeAll9mins(data.photos)
        })
}
carica_img()