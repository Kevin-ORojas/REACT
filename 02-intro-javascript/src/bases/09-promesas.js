import { getHeroById } from "./bases/08-imp-exp";

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {

    //Tarea

    const heroe = getHeroById(2)
    
    // resolve();
    resolve(heroe)
  }, 2000);
});

promesa.then(() => {
  console.log("then de la promesa");
})
.catch((err) => console.warn(err));