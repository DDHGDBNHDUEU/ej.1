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

const C = 88;
const P = 90;
const G = 50;
console.log(zetaDieta(C, P, G)); 
