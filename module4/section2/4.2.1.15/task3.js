"use strict"

let numeros = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22]

console.log("Todos os numeros")
for (let numero of numeros) {
    console.log(numero)
}

console.log("Numeros resto iguais")
for (let numero of numeros) {
    if ((numero % 2) == 0) {
        console.log(numero)
    }
}

console.log("Numeros 10 < numeros < 60")
for (let numero of numeros) {
    if ((numero > 10) && (numero < 60)) {
        console.log(numero)
    }
}

console.log("todos for em um único")
for (let numero of numeros) {
    if ((numero % 2) == 0) {
        if ((numero > 10) && (numero < 60)) {
            console.log(numero)
        }
    }
}