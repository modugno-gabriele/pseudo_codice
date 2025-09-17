
print("Menu")
print("1. Saluta")
print("2. Fai un calcolo")
print("3. Esci")

scelta = input("Scegli un'opzione (1, 2 o 3): ")

if scelta == '1':
    print("Ciao! Benvenuto nel menu.")
elif scelta == '2':
    risultato = 5 + 10
    print("Il risultato del calcolo è:", risultato)
elif scelta == '3':
    print("Arrivederci!")
else:
    print("Scelta non valida. Riprova.")