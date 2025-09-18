const numeri = [10, 25, 12, 10, 5, 10];
const conteggio = numeri.filter(n => n === 10).length;
console.log(`Il 10 appare ${conteggio} volte.`);