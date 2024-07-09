"use strict"
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

let newcontact = {
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque.urna.ca"
}

contacts.push(newcontact)

let primeirocontato = contacts.slice(0, 1)
{
    console.log(
        `
        Nome: ${primeirocontato[0].name}
        Telefone: ${primeirocontato[0].phone}   
        E-Mail: ${primeirocontato[0].email}
        `
    )
}

let ultimoContato = contacts.slice(-1)
{
    console.log(
        `
        Nome: ${ultimoContato[0].name}
        Telefone: ${ultimoContato[0].phone}   
        E-Mail: ${ultimoContato[0].email}
        `
    )
}