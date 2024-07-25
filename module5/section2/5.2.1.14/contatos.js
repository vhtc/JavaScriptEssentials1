let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
]

function showFirstContact() {
    console.log(contacts instanceof Array)
    alert(`Primeiro Contato\n\nNome: ${contacts[0].name}\n
        Phone: ${contacts[0].phone}\n
        E-mail: ${contacts[0].email}`)
}

function showLastContact() {
    let ultimoContato = contacts.length - 1
    alert(`Último Contato\n\n
        Nome: ${contacts[ultimoContato].name}\n
        Phone: ${contacts[ultimoContato].phone}\n
        E-mail: ${contacts[ultimoContato].email}`)
}

function showAllContacts() {
    let allContatos = ""
    for (let contato of contacts) {
        allContatos += `\n${contato.name}`
    }
    alert(`Todos os Contatos\n ${allContatos}`)
}

function newContact() {
    let newcontato = {
        name: String(prompt("Digite o nome do novo contato")),
        phone: String(prompt("Digite o telefone do novo contato")),
        email: String(prompt("Digite o E-mail do novo contato"))
    }
    contacts.push(newcontato)
}
let seletor = 0

while (seletor == 0) {
    let escolha = Number(prompt("1 - Mostrar Primeiro Contato\n2 - Mostrar Ultimo Contato\n3 - Mostrar todos os Contatos \n4 - Adicionar Novo Contato\n5 - Sair"))
    switch (escolha) {
        case 1: //Mostrar Primeiro Contato
            showFirstContact()
            break

        case 2: //Mostrar Último Contato
            showLastContact()
            break

        case 3: //Mostrar todos os contatos
            showAllContacts()
            break
        case 4: //Adicionar Novo Contato
            newContact()
            break

        case 5:
            seletor = 5
            alert("Você Saiu do Programa")
            break
        default:
            alert("Digite uma opção válida")
    }
}