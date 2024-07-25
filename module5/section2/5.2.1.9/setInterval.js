// setInterval(mostrador, 1000)
let x = 1
function mostrador() {
    console.log(x)
    x++
}

let contador = setInterval(mostrador, 1000)


setTimeout(() => {
    clearInterval(contador) //quando der 5 segundos pare o contador que mostra o intervalo de x
}, 5000);