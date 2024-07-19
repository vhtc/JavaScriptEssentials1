function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function mult(a, b) {
    return a * b
}

let a = 12
let b = 10

if ((Number.isInteger(a)) && (Number.isInteger(b))) {
    console.log(add(a, b))
    console.log(sub(a, b))
    console.log(mult(a, b))
}