const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("podaj pierwszą liczbę: ", (input_a) => {
    rl.question("podaj drugą liczbę: ", (input_b) => {
        const a = parseInt(input_a)
        const b = parseInt(input_b)
    })
})