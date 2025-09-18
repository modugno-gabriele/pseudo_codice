def calcola_fattoriale(n):
    if n < 0:
        return "Non è possibile calcolare il fattoriale di un numero negativo."
    
    risultato = 1
    for i in range(1, n + 1):
        risultato = risultato * i
    return risultato


print(calcola_fattoriale(5))  