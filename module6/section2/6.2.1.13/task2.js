let ar = [10, 40, 0, 8] // cadeia de divsões
let number = 1000 //mnumero a ser dividido para dar error
let res

function div() {
    ar.forEach(elemento => {

        try {
            if (elemento != 0) {
                console.log(elemento)
            } else {
                throw new RangeError("Não pode dividir por 0")
            }

        } catch (error) {
            console.log("[ERROR]" + error)
        }
    })

}

div()