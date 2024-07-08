"use strict"
let user1 = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
}

let user2 = {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com"
}

console.log(user1.name)

user2.phone = "904-399-7557"
console.log(user2)

delete user2.phone
console.log(user2.phone)