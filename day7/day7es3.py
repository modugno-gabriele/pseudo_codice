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
studente3 = Studente("Paolo Verdi", 98765)
studente3.aggiungiVoto(25)
studente3.aggiungiVoto(27)
studente3.aggiungiVoto(29)

print(f"Nome: {studente3.nome}")
print(f"Voti: {studente3.voti}")
print(f"Media dei voti: {studente3.calcolaMedia()}")