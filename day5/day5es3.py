def trova_massimo(A):
    if not A:
        return "La lista è vuota."
    
    return max(A)


numeri = [5, 9, 2, 8]
print(trova_massimo(numeri))  