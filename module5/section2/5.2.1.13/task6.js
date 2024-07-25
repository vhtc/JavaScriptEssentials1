function fibonacci(x) {
    let calculo = 0
    if (x != 0) {
        if (x === 1) {
            calculo = 1
        } else {
            calculo = fibonacci(x - 1) + fibonacci(x - 2)
        }
    }
    return calculo
}


calcular = 8 //Coloque aqui o valor a calcular o fibonnacci
console.log(fibonacci(calcular))

/*
F1 = 1

F2 = F1+F0 = 1

F3 = F2 + F1 = 2

F4 = F3 + F2 = 3

F5 = F4+ F3 = 5

F6 = F5 + F4 = 8

x = x-1 + x-2
x = fx-1

*/