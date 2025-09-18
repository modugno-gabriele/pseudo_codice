function trovaMassimo(A) {
  if (A.length === 0) {
    return "L'array è vuoto.";
  }
  
  return Math.max(...A);
}

let numeri = [5, 9, 2, 8];
console.log(trovaMassimo(numeri)); 