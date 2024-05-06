class User {
    constructor(_first_name, _last_name, _age, _location) {
        this.first_name = _first_name
        this.last_name = _last_name
        this.age = _age
        this.location = _location
    }

    calcolo = (user) => {
        if (this.age < user.age) {
            console.log(`${user.first_name} è più grande di ${this.first_name}`)
        }
        else if (this.age === user.age) {
            console.log(`${user.first_name} ha la stessa età di ${this.first_name}`)
        }
        else {
            console.log(`${this.first_name} è più grande di ${user.first_name}`)
        }
    }
}

const mirko = new User("mirko", "amoroso", 21, "fiumicino")
const giacomino = new User("giacomino", "abiuso", 22, "fiumicino")
mirko.calcolo(giacomino)


let lista_animali = []

class Pet {
    constructor(_pet_name, _owner_name, _species, _breed) {
        this.pet_name = _pet_name
        this.owner_name = _owner_name
        this.species = _species
        this.breed = _breed
    }
    padrone = (pet) => {
        if (this.owner_name === pet.owner_name) {
            return true
        }
        else {
            return false
        }
    }
}

const crea_oggetti_pet = () => {
    let animale = document.getElementById("id_animale")
    let tizio = document.getElementById("id_tizio")
    let specie = document.getElementById("id_specie")
    let razza = document.getElementById("id_razza")
    const cane = new Pet(animale.value, tizio.value, specie.value, razza.value)
    console.log(cane)
    animale.value = ""
    tizio.value = ""
    specie.value = ""
    razza.value = ""
}

let bottone = document.getElementById("bottone_save")
bottone.addEventListener("click", crea_oggetti_pet)