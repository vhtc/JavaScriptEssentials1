let a = 12
let b = 10

let add = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? console.log(a + b) : NaN
let sub = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? console.log(a - b) : NaN
let mult = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? console.log(a * b) : NaN

let action = (action, a, b) => action(a, b)

action(mult, a, b)