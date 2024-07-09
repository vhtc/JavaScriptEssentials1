"use strict"

//task3
let biblioteca = [
    {
        title: "Falando JavaScript",
        autor: "Axel Rauschmayer",
        pages: 460
    },
    {
        title: "Programação JavaScript Aplicações",
        autor: "Eric Elliott",
        pages: 254
    },
    {
        title: "Compreendendo o ECMAScript 6",
        autor: "Nicholas C. Zakas",
        pages: 352
    }
]

// task4
let newbook = {
    title: "Aprender JavaScript Design Patterns",
    autor: "Addy Osmani",
    pages: 254
}

biblioteca.push(newbook)

console.log(`\n        Total de Livros: ${biblioteca.length} \n`)

for (let cont = 0; cont < biblioteca.length; cont++) {
    console.log(`Livro ${cont + 1}: ${biblioteca[cont].title}`)
}

console.log("")
//task5
let selectbooks = biblioteca.slice(-2)
let livroselecionados = ""
for (let cont = 0; cont < selectbooks.length; cont++) {
    livroselecionados = livroselecionados + `\n ${selectbooks[cont].title}`
}
console.log(`Livros selecionados: ${livroselecionados}`)

//task6
biblioteca.shift()
console.log("\nFoi eliminado o primeiro livro")
console.log(`\n        Total de Livros: ${biblioteca.length} \n`)

for (let cont = 0; cont < biblioteca.length; cont++) {
    console.log(`Livro ${cont + 1}: ${biblioteca[cont].title}`)
}

// task7
let totalPages = 0
for (let cont = 0; cont < biblioteca.length; cont++) {
    totalPages = totalPages + biblioteca[cont].pages
}
console.log(`\nTotal de Páginas na Bilioteca: ${totalPages}`)