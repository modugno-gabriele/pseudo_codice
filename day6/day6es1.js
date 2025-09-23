function scambia(a, b) {
  let temp = a;
  a = b;
  b = temp;
  console.log(`Dentro la funzione (dopo lo scambio): a=${a}, b=${b}`);
}

let x = 10;
let y = 20;

console.log(`Fuori dalla funzione (prima della chiamata): x=${x}, y=${y}`);
scambia(x, y);
console.log(`Fuori dalla funzione (dopo la chiamata): x=${x}, y=${y}`);
