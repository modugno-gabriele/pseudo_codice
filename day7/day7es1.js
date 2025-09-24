class Studente {
    constructor(nome, matricola) {
        this.nome = nome;
        this.matricola = matricola;
        this.voti = [];
    }
}


const studente1 = new Studente("Mario Rossi", 12345);
console.log(`L'oggetto studente1 è stato creato con nome: ${studente1.nome}`);