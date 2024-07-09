"use strict"

function adicionar() {

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

    let newcontact ={
        name: String(prompt("Digite o Nome do novo contato")),
        phone: String(prompt("Digite o Telefone do novo contato")),
        email: String(prompt("Digite o E-Mail do novo contato"))
    }

    contacts.push(newcontact)

let last = contacts.length - 1

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`)
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`)
}