const generatore_scarpe_card = (arrray_scarpe) => {
    const riga = document.getElementById("event_row")
    arrray_scarpe.forEach(scarpe => {
        const nuova_colonna = document.createElement("div")
        nuova_colonna.classList.add("col")
        nuova_colonna.innerHTML = `
        <div class="card h-100 d-flex flex-column">
        <img src=https://shoeseller.in/wp-content/uploads/2023/06/jordan-1-chicago-in-1500-320x320.jpeg" class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column justify-content-around">
          <h5 class="card-title">${scarpe.name}</h5>
          <p class="card-text">${scarpe.description}</p>
          <p class="card-text">${scarpe.brand}</p>
          <p class="card-text">${scarpe.size}<p>
          <div class="d-flex justify-content-between">
            <button class="btn btn-primary">${scarpe.price}€</button>
            <a href="details.html?eventId=${scarpe._id}" class="btn btn-info">INFO</a>
          </div>
        </div>
      </div>
        `
        riga.appendChild(nuova_colonna)
    });
}

const getEvents = () => {
    fetch("https://striveschool-api.herokuapp.com/api/product/")
    .then((response) => {
      if (response.ok) {
        console.log("daje")
        return response.json()
      } else {
        console.log("coddio")
        throw new Error('Errore nella risposta del server')
      }
    })
    .then((array) => {
      console.log('ARRAY!', array)
      // creiamo le card per la landing page
      generateConcertCards(array)
    })
    .catch((err) => {
      console.log('ERRORE!', err)
    })
}

getEvents()
