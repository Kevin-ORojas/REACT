// Funciones en JS

const saludar = function saludar(nombre) {
    console.log(`Hola ${nombre}!`);
  };
  
  const saludar2 = (nombre) => {
    console.log(`Hola ${nombre}!`);
  };
  
  const saludar3 = (nombre) => `Hola ${nombre}!`;
  
  console.log(saludar("goku"));
  
  const getUser = () => {
    return {
      uid: "ABC123",
      username: "El_papi1502",
    };
  };
  
  console.log(getUser());
  
  // tarea
  //1. transformar a una funcion de flecha
  //2. Tiene que retornar un objeto implicito
  //3. pruebas
  
  // esta funcion retorna un objeto implicito : puedes devolver un objeto directamente sin necesidad de usar la palabra clave return ni envolver el objeto en paréntesis.
  const getUsuarioActivo = (nombre) => ({
    uid: "ABC123",
    username: nombre,
  });
  
  const usuarioActivo = getUsuarioActivo("kevin");
  
  console.log(usuarioActivo);
  