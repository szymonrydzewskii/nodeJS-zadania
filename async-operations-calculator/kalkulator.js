const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function metoda_callback(a, b, operacja){
    setTimeout(() => {
        var wynik = 0
        if(operacja === "1"){
            wynik = a + b
        }
        else if(operacja === "2"){
            wynik = a * b
        } else{
            return console.log("błąd"), rl.close()
        }
        console.log(wynik)
        rl.close()
    }, 1000)
}

function metoda_promise(a, b, operacja){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (operacja === "1"){
                resolve(a+b)
            } 
            else if (operacja === "2"){
                resolve(a*b)
            } else{
                reject("Nieznana operacja")
            }
        }, 1000)
    })
}


rl.question("podaj pierwszą liczbę: ", (input_a) => {
    rl.question("podaj drugą liczbę: ", (input_b) => {
        const a = parseInt(input_a)
        const b = parseInt(input_b)

        rl.question("Wybierz operacje (dodawanie = 1, mnożenie = 2): ", (operacja) => {
            rl.question("Wybierz metodę (callback = 1, promise = 2: ", (metoda) => {
            if(metoda === "1"){
                metoda_callback(a, b, operacja, (err, wynik) => {
                    if(err) {
                        console.error(err)
                        return
                    }
                    console.log(wynik)
                    })
                }
            else if (metoda === "2"){
                metoda_promise(a, b, operacja).then(wynik =>{
                    console.log(wynik)
                }).catch(err => {
                    console.error(err)
                }).finally(rl.close())
            } else{
                console.error("błąd")
                rl.close()
            }
            })
        })
    })
})