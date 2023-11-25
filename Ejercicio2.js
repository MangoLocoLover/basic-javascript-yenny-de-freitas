const scanner = require("prompt-sync")({ sigint: true})

const Nota = scanner("Ingresa tu nota ")

if (Nota >= 0 && Nota <= 10){
    if (Nota <3){
        console.log("Muy deficiente")
    }
    else if (Nota >=3 && Nota<5){
        console.log("Insuficiente")
    }
    else if (Nota >=5 && Nota<6){
        console.log("Suficiente")
    }
    else if (Nota >=6 && Nota<9){
        console.log("Notable")
    }
    else {
        console.log("Sobresaliente")
    }
}

else {
    console.log("Nota incorrecta")
}