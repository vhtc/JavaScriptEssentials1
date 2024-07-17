let nomes = ["Victor", "Tuy", "Cerqueira"]

nomes.forEach(mostrarNomes)

function mostrarNomes(nome) {
    console.log(nome)
}


nomes.forEach(nome => {
    nome == "Victor" ? console.log(nome): null
})