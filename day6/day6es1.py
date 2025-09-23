def scambia_valore_py(a, b):
    print("Dentro la funzione (prima dello scambio): a=", a, ", b=", b)
    temp = a       
    a = b          
    b = temp       
    print("Dentro la funzione (dopo lo scambio): a=", a, ", b=", b)

x = 10
y = 20
print("Fuori dalla funzione (prima della chiamata): x=", x, ", y=", y)

scambia_valore_py(x, y)

print("Fuori dalla funzione (dopo la chiamata): x=", x, ", y=", y)
