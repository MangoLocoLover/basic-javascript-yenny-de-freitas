const scanner = require("prompt-sync")({ sigint: true})

let textInput = scanner("Introduce texto=> ")
let cadena = ""
let texto

while (textInput!= "Cancelar"){
    if (String(textInput)){
        texto = String(textInput)
        cadena = (cadena + texto + "-")
    }else {
        scanner("Introduce texto=> ")
    }
    textInput = scanner("Introduce los textos=> ")
}

console.log("Cancelaste la entrada, tus textos son: " + cadena)