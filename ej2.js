// calcular la distancia Manhattan entre dos puntos
function distanciaManhattan(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

// verificar si una posición es válida
function Valido(x, y, filas, columnas, mapa) {
    return x >= 0 && x < filas && y >= 0 && y < columnas && mapa[x][y] === '.';
}

//encuentra todas las posiciones alcanzables 
function posicionesAlcanzables(inicioX, inicioY, filas, columnas, alcance, mapa) {
    let distancias = Array(filas).fill().map(() => Array(columnas).fill(-1));
    let pendientes = [[inicioX, inicioY]];
    distancias[inicioX][inicioY] = 0;

    let posiciones = [[inicioX, inicioY]];
    let direcciones = [[-1, 0], [1, 0], [0, -1], [0, 1]];  // arriba abajo izquierda derecha

    while (pendientes.length > 0) {
        let [x, y] = pendientes.shift();

        for (let [dx, dy] of direcciones) {
            let nx = x + dx;
            let ny = y + dy;

            if (Valido(nx, ny, filas, columnas, mapa) && distancias[nx][ny] === -1 && distancias[x][y] + 1 <= alcance) {
                distancias[nx][ny] = distancias[x][y] + 1;
                pendientes.push([nx, ny]);
                posiciones.push([nx, ny]);
            }
        }
    }
    return posiciones;
}

//calcular la máxima sanación
function maximaSanacion(posX, posY, n, fila, col, vidaInicial, vidaActual) {
    let sanacion = 0;
    for (let i = 1; i < n; i++) {
        if (distanciaManhattan(posX, posY, fila[i], col[i]) <= 2) {
            sanacion += Math.min(10, vidaInicial[i] - vidaActual[i]);
        }
    }
    return sanacion;
}

function resolver(n, filas, columnas, fila, col, vidaInicial, vidaActual, alcance, mapa) {
    let posiciones = posicionesAlcanzables(fila[0], col[0], filas, columnas, alcance, mapa);
    let maximaSanacionPosible = 0;

    for (let [x, y] of posiciones) {
        maximaSanacionPosible = Math.max(maximaSanacionPosible, maximaSanacion(x, y, n, fila, col, vidaInicial, vidaActual));
    }

    return maximaSanacionPosible;
}

// Ejemplo de uso 
function principal() {
    const n = 6, filas = 4, columnas = 6;
    const fila = [2, 3, 0, 2, 0, 3];
    const col = [2, 3, 5, 0, 4, 1];
    const vidaInicial = [13, 40, 40, 50, 40, 6];
    const vidaActual = [10, 34, 1, 48, 32, 1];
    const alcance = 4;
    const mapa = [
        "..XX..",
        "...XXX",
        "...X..",
        "......"
    ];

    let resultado = resolver(n, filas, columnas, fila, col, vidaInicial, vidaActual, alcance, mapa);
    console.log(resultado);  // Debería imprimir 8
}

principal();
