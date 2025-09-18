const x = parseInt(prompt("Inserisci un numero:"));
let f = 1;

for (let i = 1; i <= x; i++) {
  f *= i;
}

console.log(`Il fattoriale di ${x} è: ${f}`);