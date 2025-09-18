x = int(input("Inserisci un numero: "))
f = 1
for i in range(1, x + 1):
    f *= i
print(f"Il fattoriale di {x} è: {f}")