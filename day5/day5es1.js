function calcolaFattoriale(n) {
  if (n < 0) {
    return "Non è possibile calcolare il fattoriale di un numero negativo.";
  }
  
  let risultato = 1;
  for (let i = 1; i <= n; i++) {
    risultato *= i;
  }
  return risultato;
}


console.log(calcolaFattoriale(5)); 