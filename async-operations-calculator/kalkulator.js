const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function metoda_callback(a, b, operacja, callback){
    setTimeout(() => {
        var wynik = 0
        if(operacja === "1"){
            wynik = a + b
        }
        else if(operacja === "2"){
            wynik = a * b
        } else{
            return callback("błąd")
        }
        callback(wynik)
    }, 1000)
}

rl.question("podaj pierwszą liczbę: ", (input_a) => {
    rl.question("podaj drugą liczbę: ", (input_b) => {
        const a = parseInt(input_a)
        const b = parseInt(input_b)

        rl.question("Wybierz operacje (dodawanie = 1, mnożenie = 2): ", (operacja) => {
            metoda_callback(a, b, operacja, (error, wynik) => {
                if (error){
                    console.log(error)
                } else{
                    console.log("Wynik: ", wynik)
                }
                rl.close()
            })
        })
    })
})