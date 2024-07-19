let a = 12
let b = 10

let add = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a + b : NaN
let sub = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a - b : NaN
let mult = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a * b : NaN

console.log(add(a, b))
console.log(sub(a, b))
console.log(mult(a, b))