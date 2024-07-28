function outer() {
    let name = "outer"
    let str = inner()
    return str
}

function inner(){
    let name = "inner"
    return "Hello"
}
debugger
console.log("Antes do outer")

console.log(outer())
console.log("Depois do outer")