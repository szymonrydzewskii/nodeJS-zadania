const fs = require("fs")
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("podaj swoje imię: ", (name) => {
    rl.question("podaj swoje nazwisko: ", (surname) => {
        rl.question("podaj swój wiek: ", (age) => {
            const daneUser = {
                name: name,
                surname: surname,
                age: age
            }
        })
    })
})