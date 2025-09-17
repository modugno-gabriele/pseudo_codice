let a = 5;
let b = 3;
let c = 7;
if (a > b && a > c) {
    console.log("Il numero maggiore è A:", a);
} else if (b > a && b > c) {
    console.log("Il numero maggiore è B:", b);
} else if (c > a && c > b) {
    console.log("Il numero maggiore è C:", c);
} else {
    console.log("Ci sono numeri uguali o la logica non è applicabile.");
}