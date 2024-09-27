import { heroes } from "./data/heroes";

console.log(heroes);

//El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
const getHeroById = (id) => {
  return heroes.find((hero) => hero.id === id);
};

console.log(getHeroById(2));

// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
const getHeroByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);

console.log(getHeroByOwner("DC"));
