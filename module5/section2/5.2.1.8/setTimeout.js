function contar(x) {
    console.log(`${x} segundos`)
}

for (let cont = 0; cont < 5; cont++) {

    setTimeout(contar(cont), 1000)
}