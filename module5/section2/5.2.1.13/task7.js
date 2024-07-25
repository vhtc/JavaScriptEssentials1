let x = 1

let contador = setInterval(function mostrar() {
    console.log(x++)
}, 500)

setTimeout(() => {
    clearInterval(contador)
}, 5500);

//fibonacci encurtado

// function fibonacci(x) {
//     let calculo = 0
//     if (x != 0) {
//         if (x === 1) {
//             calculo = 1
//         } else {
//             calculo = fibonacci(x - 1) + fibonacci(x - 2)
//         }
//     }
//     return calculo
// }

let fibonacci = calculo => calculo == 0 ? 0 : (calculo == 1 ? 1 : fibonacci(calculo - 1) + fibonacci(calculo - 2));



calcular = 8 //Coloque aqui o valor a calcular o fibonnacci
console.log(fibonacci(calcular))