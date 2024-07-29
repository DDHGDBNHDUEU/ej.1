function zetaDieta(C, P, G) {
    let bananas = Math.floor(C / 27);
    if (C % 27 !== 0) {
        bananas += 1;
    }

    let atun = Math.floor(P / 30);
    if (P % 30 !== 0) {
        atun += 1;
    }

    const aceite = G;

    //saber las calorías totales
    const calorias = (bananas * 105) + (atun * 120) + (aceite * 9);
    return calorias;
}

// Subtarea 1
console.log(zetaDieta(0, 0, 1000)); 

// Subtarea 2
console.log(zetaDieta(0, 0, 0)); 

// Subtarea 3
console.log(zetaDieta(0, 1000, 0));

// Subtarea 4
console.log(zetaDieta(0, 1, 0));

// Subtarea 5
console.log(zetaDieta(1000, 0, 0)); 

// Subtarea 6
console.log(zetaDieta(1, 0, 0));
 
// Subtarea 7
console.log(zetaDieta(1000, 1000, 1000)); 

// Subtarea 8
console.log(zetaDieta(88, 90, 50));
