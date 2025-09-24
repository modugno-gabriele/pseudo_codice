class Studente {
    constructor(nome, matricola) {
        this.nome = nome;
        this.matricola = matricola;
        this.voti = [];
    }

    aggiungiVoto(voto) {
        this.voti.push(voto);
    }

    calcolaMedia() {
        if (this.voti.length === 0) {
            return 0;
        }
        const somma = this.voti.reduce((acc, voto) => acc + voto, 0);
        return somma / this.voti.length;
    }
}


const studente2 = new Studente("Giulia Bianchi", 54321);
studente2.aggiungiVoto(28);
studente2.aggiungiVoto(30);
console.log(`La lista voti di Giulia è: ${studente2.voti}`);
const studente3 = new Studente("Paolo Verdi", 98765);
studente3.aggiungiVoto(25);
studente3.aggiungiVoto(27);
studente3.aggiungiVoto(29);

console.log(`Nome: ${studente3.nome}`);
console.log(`Voti: ${studente3.voti}`);
console.log(`Media dei voti: ${studente3.calcolaMedia()}`);