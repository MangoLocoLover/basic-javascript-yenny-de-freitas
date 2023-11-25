const scanner = require("prompt-sync")({ sigint: true})

let numInput = scanner ("Introduce números=> ")
let suma = 0
let numeros

while (numInput!== "Cancelar"){
    if (Number(numInput)){
        numeros = Number(numInput)
        suma = (suma + numeros)
    }
    else {
        console.log("No entendido")
    }

numInput = scanner ("Introduce numeros=> ")
}

console.log("Cancelaste el cálculo. Tu suma da: " + suma)