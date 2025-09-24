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