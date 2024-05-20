interface contratto_cell {
    credito:Number //credito residuo della SIM
    numero_chiamate:Number //numero di minuti di chiamate effettuati
}

interface smartphone {
    nome:String
    cognome:String
}

class User implements contratto_cell, smartphone {
    constructor(
    public credito: Number,
    public numero_chiamate: Number,
    public nome: String,
    public cognome: String
){this.credito = credito}
}

const mario:User = {
    credito: 2,
    numero_chiamate: 4,
    nome: "mirko",
    cognome: "amoroso"
}