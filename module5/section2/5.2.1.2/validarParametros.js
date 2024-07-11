function getValidador(x) {
    if (!(x instanceof Array)) {
        return NaN
    }
    else {
        let sum = 0
        for (let i = 0; i < x.length; i++) {
            sum += x[i]
        }
        return sum / x.length
    }
}

obj = 10
array = [10, 30]

console.log(getValidador(obj))
console.log(getValidador(array))