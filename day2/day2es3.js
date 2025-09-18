
function showMenu() {
    let choice = prompt(
        "--- Menu di Calcolo ---\n" +
        "1. Addizione\n" +
        "2. Sottrazione\n" +
        "3. Moltiplicazione\n" +
        "4. Esci\n\n" +
        "Seleziona un'opzione (1-4):"
    );
    return choice;
}

function calculator() {
    let a = 10;
    let b = 5;
   
    let userChoice = showMenu();

    switch (userChoice) {
        case '1':
            let addResult = a + b;
            console.log("Risultato dell'addizione:", addResult);
            break; 
        case '2':
            let subResult = a - b;
            console.log("Risultato della sottrazione:", subResult);
            break;
        case '3':
            let multResult = a * b;
            console.log("Risultato della moltiplicazione:", multResult);
            break;
        case '4':
            console.log("Uscita...");
            break;
        default:
            console.log("Scelta non valida. Riprova.");
            break;
    }
}

calculator();