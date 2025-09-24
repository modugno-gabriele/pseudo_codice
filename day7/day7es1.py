class Studente:
    def __init__(self, nome, matricola):
        self.nome = nome
        self.matricola = matricola
        self.voti = []


studente1 = Studente("Mario Rossi", 12345)
print(f"L'oggetto studente1 è stato creato con nome: {studente1.nome}")

