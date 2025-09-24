class Studente:
    def __init__(self, nome, matricola):
        self.nome = nome
        self.matricola = matricola
        self.voti = []

    def aggiungiVoto(self, voto):
        self.voti.append(voto)

    def calcolaMedia(self):
        if not self.voti:
            return 0
        return sum(self.voti) / len(self.voti)


studente2 = Studente("Giulia Bianchi", 54321)
studente2.aggiungiVoto(28)
studente2.aggiungiVoto(30)
print(f"La lista voti di Giulia è: {studente2.voti}")