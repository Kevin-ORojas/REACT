import { heroes } from "../data/heroes";

console.log(heroes);

// El método find ejecuta la función callback una vez por cada índice del array hasta que encuentre uno en el que el callback devuelva un valor verdadero. Si es así, find devuelve inmediatamente el valor del elemento. En caso contrario, find devuelve undefined.
export const getHeroById = (id) => heroes.find((hero) => hero.id === id);

//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

const getHeroByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);
