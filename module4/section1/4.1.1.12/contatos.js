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

let seletor = 0

while (seletor == 0) {
    let escolha = Number(prompt("1 - Mostrar Primeiro Contato\n2 - Mostrar Ultimo Contato \n3 - Adicionar Novo Contato\n4 - Sair"))
    switch (escolha) {
        case 1: //Mostrar Primeiro Contato
            alert(`Primeiro Contato\n\nNome: ${contacts[0].name}\nPhone: ${contacts[0].phone}\nE-mail: ${contacts[0].email}`)
            break

        case 2: //Mostrar Último Contato
            let ultimoContato = contacts.length - 1
            alert(`Último Contato\n\nNome: ${contacts[ultimoContato].name}\nPhone: ${contacts[ultimoContato].phone}\nE-mail: ${contacts[ultimoContato].email}`)
            break

        case 3: //Adicionar Novo Contato
            let newcontato = {
                name: String(prompt("Digite o nome do novo contato")),
                phone: String(prompt("Digite o telefone do novo contato")),
                email: String(prompt("Digite o E-mail do novo contato"))
            }
            contacts.push(newcontato)
            break

        case 4:
            seletor = 4
            alert("Você Saiu do Programa")
            break
        default:
            alert("Digite uma opção válida")
    }
}