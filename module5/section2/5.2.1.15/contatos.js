let contacts = [
    {
        name: "Maxwell Wright",
        phone: "0191 719 6495",
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

function orderContact() { //Ordenação de contatos por ordem
    let order = 0
    while (order == 0) {
        let escolhe = Number(prompt("Ordenação dos Contatos \n1 - Por Nome \n2 - Por telefone \n3 - Por E-Mail \n9 - Voltar"))
        switch (escolhe) {
            case 1:
                contacts.sort((a, b) => a.name.localeCompare(b.name))
                alert("Contatos Ordenados por Nome, Mostre todos os contatos para visualizar a ordenação")
                main()
                break
            case 2:
                contacts.sort((a, b) => a.phone.localeCompare(b.phone))
                alert("Contatos Ordenados por Telefone, Mostre todos os contatos para visualizar a ordenação")
                main()
                break
            case 3:
                contacts.sort((a, b) => a.email.localeCompare(b.email))
                alert("Contatos Ordenados por E-Mail, Mostre todos os contatos para visualizar a ordenação")
                main()
                break
            case 9:
                order = 9
                main()
                break
            default:
                alert("Digite uma opção válida")
        }
    }
}
function main() {
    let seletor = 0
    while (seletor == 0) { //Seleção do Programa
        let escolha = Number(prompt("1 - Mostrar Primeiro Contato\n2 - Mostrar Ultimo Contato\n3 - Mostrar todos os Contatos \n4 - Adicionar Novo Contato \n5 - Ordenar Contatos\n9 - Sair"))
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
                orderContact()
            case 9:
                seletor = 9
                alert("Você Saiu do Programa")
                break
            default:
                alert("Digite uma opção válida")
        }
    }
}