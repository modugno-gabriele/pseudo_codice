def modifica_primo_elemento(un_array, nuovo_valore):
    print(f"Dentro la funzione, prima della modifica: {un_array}")
    un_array[0] = nuovo_valore
    print(f"Dentro la funzione, dopo la modifica: {un_array}")

numeri = [10, 20, 30]
print(f"Array originale prima della chiamata: {numeri}")

modifica_primo_elemento(numeri, 50)

print(f"Array originale dopo la chiamata: {numeri}")
