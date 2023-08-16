const prompt = require("prompt-sync")({ sigint: true });

//

 let temperatura = prompt ("Ingrese su temperatura: ");

 if (temperatura < 37.5) {
     console.log ("Prioridad baja");
 } else {
     console.log ("prioridad alta");
 }


// Ejemplo if, else

let edad = prompt ("Dime tu edad: ");
if (edad >= 21) {
     console.log ("Adelante, puedes ingresar");
     let numerosecreto =10;
     let respuestausuario = prompt ("¿Cuál es el NS: ")
     if (respuestausuario == numerosecreto) {
         console.log ("Puedes entrar a la fiesta secreta");
     } else {
         console.log ("no puedes ingresar a la fiesta secreta");
     }
 } else {
     console.log ("no puedes ingresar")
 }

// Ejemplo else if

let edad = parseInt (prompt ("Ingrese su edad: "));

if ( edad < 18) {
    console.log ("No puedes ingresar a la fiesta.")

} else if ( edad > 18 ){
    console.log ("Puedes ingresar al bar")
} else {

} 