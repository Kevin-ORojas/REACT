//Template string

const nombre = "Kevin";
const apellido = "Rojas";

const saludo = `Hola ${nombre} ${apellido}!`;

console.log(saludo);

function getSaludo() {
  return "Hola mundo " + nombre;
}
console.log(`ese es un un texto ${getSaludo(nombre)}`);
