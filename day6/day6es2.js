function modificaElemento(unArray, indice, nuovoValore) {
  console.log(`Dentro la funzione, prima della modifica: ${unArray}`);
  unArray[indice] = nuovoValore;
  console.log(`Dentro la funzione, dopo la modifica: ${unArray}`);
}

let colori = ['rosso', 'verde', 'blu'];
console.log(`Array originale prima della chiamata: ${colori}`);

modificaElemento(colori, 1, 'giallo'); 

console.log(`Array originale dopo la chiamata: ${colori}`);
