function fatorial(x) {
    try {
        if (x > 20) {
            throw new RangeError("Valor máximo 20")
        }
        let res = 1
        for (; x > 1; x--) {
            res = res * x
        }
        return res
    } catch (error) {
        console.log("[ERRO] Valor máximo digitado maior que 20")
    }
}


console.log(fatorial(5))
console.log(fatorial(21))