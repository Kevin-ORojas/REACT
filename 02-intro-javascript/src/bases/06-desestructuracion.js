// Desestructuracion
// asiganacion Desestructante

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
  };
  
  const useContext = ({ clave, edad, nombre, direccion }) => {
    return {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.98,
        lng: 123.45,
      },
    };
  };
  
  const {
    nombreClave,
    anios,
    latlng: { lat, lng },
  } = useContext(persona);
  
  console.log(nombreClave, anios);
  console.log(lat);
  console.log(lng);
  