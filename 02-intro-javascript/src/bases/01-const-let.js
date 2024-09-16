//Variables y constantes

console.log("Variables y constantes");

//La palabra reservada CONST , es una variable que no puede ser mutada

const nombre = "Kevin";
let apellido = "Rojas";

let valorDado = 5;

console.log(nombre, apellido, valorDado);

//var no se debe usar!

if(true) {
    let valorDado = 8 // esto es una variable de scoped pertenece dentro del if
    console.log(valorDado)
}
console.log(valorDado)