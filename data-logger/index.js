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

            fs.writeFileSync("data-logger/dane.json", JSON.stringify(daneUser))

            const dane = fs.readFileSync("data-logger/dane.json", "utf8")
            console.log("Odczytane dane: ", JSON.parse(dane))

            rl.close()
        })
    })
})