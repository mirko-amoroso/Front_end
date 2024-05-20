const createNewProduct = (newProductData) => {
    fetch('https://striveschool-api.herokuapp.com/api/product/', {
        method: 'POST',
        body: JSON.stringify(newProductData),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
        if (response.ok) {
            // Gestisci il successo della creazione della risorsa
            alert('Nuovo prodotto creato con successo!');
        } else {
            // Gestisci l'errore nella creazione della risorsa
            throw new Error('Errore durante la creazione del nuovo prodotto');
        }
    })
    .catch((error) => {
        console.error('Errore:', error);
        alert('Si è verificato un errore durante la creazione del nuovo prodotto');
    });
};

// Funzione per creare un nuovo prodotto con i dati specificati
const createProduct = () => {
    const newProductData = {
        name: 'Nome del prodotto',
        description: 'Descrizione del prodotto',
        brand: 'Marca del prodotto',
        imageUrl: 'URL dell\'immagine del prodotto',
        price: 0, // Prezzo del prodotto
        // id e user_id sono generati dal server
    };

    createNewProduct(newProductData);
};

// Esempio di utilizzo: chiamare questa funzione quando si desidera creare un nuovo prodotto
createProduct();