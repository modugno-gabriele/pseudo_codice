let anno = parseInt(prompt("Inserisci l'anno:"));
if ((anno % 4 === 0 && anno % 100 !== 0) || (anno % 400 === 0)) {
    console.log("È un anno bisestile");
} else {
    console.log("Non è un anno bisestile");
}