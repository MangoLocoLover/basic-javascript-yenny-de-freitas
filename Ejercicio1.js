const scanner = require("prompt-sync")({ sigint: true})

const Nombre = scanner ("Ingresa tu nombre => ")
const Edad = scanner ("Ingresa tu edad => ")

if (Edad>=18){
    console.log("Si puedes conducir")
} else {
    console.log("No puedes conducir")
}