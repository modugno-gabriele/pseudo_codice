n = int(input("Quanti numeri pari vuoi sommare?: "))
somma = 0
val = 0

for _ in range(n):
    val += 2
    somma += val

print(f"La somma dei primi {n} numeri pari è: {somma}")