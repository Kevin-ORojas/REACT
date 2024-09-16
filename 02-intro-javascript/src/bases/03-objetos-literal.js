// objetos literales

const persona = {
  nombre: "Kevin",
  apellido: "Rojas",
  edad: 30,
  direccion: {
    calle: "Calle 123",
    numero: 1234,
  },
  hobbies: ["Leer", "Cocinar", "Programar"],
};

console.log(persona);

const persona2 = { ...persona, nombre: "peter" }; // esto toma una copia de el array de persona, y actualiza el valor de nombre a 'PETER'
console.log(persona2);
