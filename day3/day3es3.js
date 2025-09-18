let somma = 0;
let conteggio = 0;
let input;

alert("Inserisci numeri. Quando hai finito, scrivi 0.");

while (true) {
  input = prompt("Inserisci un numero:");

  if (input === null || input === '0') {
    break; // Esce se l'utente annulla o inserisce 0
  }

  let numero = parseFloat(input);
  if (!isNaN(numero)) {
    somma += numero;
    conteggio++;
  }
}

if (conteggio > 0) {
  let media = somma / conteggio;
  alert(`La media è: ${media}`);
} else {
  alert("Nessun numero inserito.");
}