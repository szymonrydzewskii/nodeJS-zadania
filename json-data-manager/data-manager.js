const fs = require("fs")
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
async function dodawanie(sciezka, nowyObiekt){
    try{
        const data = await JSON.parse(fs.promises.readFile(`json-data-manager/${sciezka}`, 'utf8'))
        data.push(nowyObiekt)
        await fs.promises.writeFile(`json-data-manager/${sciezka}`, JSON.stringify(data))
        console.log("Dodano dane")
    } catch(err){
        await fs.promises.writeFile(`json-data-manager/${sciezka}`, JSON.stringify([nowyObiekt]))
    }
}
rl.question("wpisz nazwe pliku z jakim chcesz pracować (np. dane.json): ", (sciezka) => {
        rl.question("chcesz dodać nowy obiekt czy wyświetlić dane? (dodać = 1, wyświetlić dane = 2): ", (wybor) =>{
        if(wybor === "1"){
            rl.question("podaj imię: ", (name) => {
                rl.question("podaj wiek: ", (age) => {
                    rl.question("podaj email: ", (email) => {
                        const nowyObiekt = {name, age: parseInt(age), email}
                        dodawanie(sciezka, nowyObiekt)
                        rl.close()
                            })
                        })
                    })
                }}
            )
        }
    )