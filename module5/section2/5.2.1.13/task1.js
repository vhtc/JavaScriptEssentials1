let numeros = [50, 30, 10, 40, 60, 80, 20, 70, 100, 90]

// function comparar(a, b) {
//     let x = 0
//     if (a > b) {
//         x = 1
//     } else if (a < b) {
//         x = -1
//     }
//     return x
// }

let sorteado = numeros.sort((a, b) => a - b)

let sorteado2 = numeros.sort((a, b) => b - a)


console.log(sorteado)
console.log(sorteado2)