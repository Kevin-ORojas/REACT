import { heroes } from "./data/heroes";

console.log(heroes);


// El método find ejecuta la función callback una vez por cada índice del array hasta que encuentre uno en el que el callback devuelva un valor verdadero. Si es así, find devuelve inmediatamente el valor del elemento. En caso contrario, find devuelve undefined.
const getHeroById = (id) => {
  return heroes.find((hero) => hero.id === id);
  
};

console.log(getHeroById(2))
