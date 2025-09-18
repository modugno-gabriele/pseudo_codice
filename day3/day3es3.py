somma = 0
conteggio = 0

print("Inserisci numeri (0 per terminare):")

while True:
    numero = float(input("> "))
    if numero == 0:
        break
    somma += numero
    conteggio += 1

if conteggio > 0:
    media = somma / conteggio
    print(f"La media è: {media}")
else:
    print("Nessun numero inserito.")