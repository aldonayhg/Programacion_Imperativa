const prompt = require("prompt-sync")({ sigint: true });

/*
let edad = prompt ("ingrese su edad: ");

if (edad<0) {
    console.log("Error, edad inválida. Por favor ingrese un número válido");
} else if (edad<18) {
    if (edad % 2 == 1){
        console.log ("No puedes pasar al bar" + ", pero ¿sabías que tu edad es impar?");
    } else {
        console.log("No puedes pasar al bar.");
    }
} else if (edad <21){
    if (edad % 2 == 1){
        console.log ("Puedes pasar al bar, pe no no puedes tomar alcohol." + "¿Sabías que tu edad es impar?");
    } else {
        console.log ("Puedes pasar al bar, peno no puedes tomar alcohol");
    }
} else if (edad >=21) {
    if (edad % 2 == 1){
        console.log ("Felicidades, puedes pasar al bar y tomar alcohol" + ", pero ¿sabías que tu edad es impar?");
    } else {
        console.log ("Felicidades, puedes pasar al bar y tomar alcohol");
} 
}

*/


//Gasolinera. Total a pagar

let vehiculo = prompt ("Tipo de vehiculo: ");
let litrosConsumidos = prompt ("Cuántos litros consumiste? ");


function totalAPagar (vehiculo, litrosConsumidos) {
    if (vehiculo == "coche") {
        if (litrosConsumidos>0 && litrosConsumidos<=25) {
            return litrosConsumidos * 86 + 50;
        } else if (litrosConsumidos>25) {
            return litrosConsumidos * 86 + 25;
        } else {
            return litrosConsumidos *86;
        }
    } else if (vehiculo == "moto") {
        if (litrosConsumidos>0 && litrosConsumidos<=25) {
            return litrosConsumidos * 70 + 50;
        } else if (litrosConsumidos>25) {
            return litrosConsumidos * 70 + 25;
        } else {
            return litrosConsumidos *70;
        }
    } else if (vehiculo == "autobus") {
        if (litrosConsumidos>0 && litrosConsumidos<=25) {
            return litrosConsumidos * 55 + 50;
        } else if (litrosConsumidos>25) {
            return litrosConsumidos * 55 + 25;
        } else {
            return litrosConsumidos *55;
        }
    }
}
console.log (totalAPagar(vehiculo, litrosConsumidos));
