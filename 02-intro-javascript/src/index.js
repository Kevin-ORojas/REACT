// Desestructuracion de arreglos

const personajes = ["Goku", "Vegeta", "Trunks"];

const [, , nombre3] = personajes; // las comas generan ignorance

console.log(nombre3); // Trunks

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numero] = retornaArreglo();

console.log(letras, numero);

//tarea
//1. el primer valor del arr se llamara nombre
//2. el segundo se llamara setNombre
const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo");
    },
  ];
};

const [nombre, setNombre] = useState("Goku");

console.log(nombre);
setNombre()