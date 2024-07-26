let x = Number(prompt('Primeiro numero'))
let y = Number(prompt('Segundo Numero'))


if (Number.isFinite(x) && Number.isFinite(y) && y != 0) {
    console.log(x/y)
}else{
    console.log("incorrect arguments")
}