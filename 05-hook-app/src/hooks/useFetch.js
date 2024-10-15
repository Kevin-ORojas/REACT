import React, { useEffect, useState } from "react";

// Objeto para almacenar en caché los datos que ya se hayan obtenido de las URLs
const localCache = {};

// Hook personalizado que toma una URL y devuelve los datos, el estado de carga y el manejo de errores
export const useFetch = (url) => {
  // Estado inicial: data es null, loading está en true y no hay error
  const [state, setState] = useState({
    data: null,
    loading: true,
    hasError: false,
    error: null,
  });

  // Efecto que se ejecuta cuando la URL cambia, invocando la función getFetch
  useEffect(() => {
    getFetch();
  }, [url]); // Depende de la URL, si cambia, se vuelve a hacer la petición

  // Función que reinicia el estado de carga
  const setLoadingState = () => {
    setState({
      data: null,
      loading: true,
      hasError: false,
      error: null,
    });
  };

  // Función asíncrona que realiza la petición a la URL
  const getFetch = async () => {
    // Si los datos de la URL ya están en caché, los usa en lugar de hacer una nueva petición
    if (localCache[url]) {
      console.log("usando cache");

      // Actualiza el estado con los datos en caché y marca que ya no está cargando
      setState({
        data: localCache[url],
        loading: false,
        hasError: false,
        error: null,
      });
      return; // Finaliza la función, no hace la petición de nuevo
    }

    // Si no hay caché, establece el estado de carga
    setLoadingState();

    // Hace la petición a la URL
    const resp = await fetch(url);

    // Simula una espera de 2 segundos para ver el estado de carga
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Si la respuesta no es exitosa, actualiza el estado con el error
    if (!resp.ok) {
      setState({
        data: null,
        loading: false,
        hasError: true,
        error: {
          code: resp.status, // Código de error de la respuesta
          message: resp.statusText, // Mensaje de error
        },
      });
      return; // Finaliza la función si hay error
    }

    // Si la respuesta es exitosa, convierte los datos a formato JSON
    const data = await resp.json();

    // Actualiza el estado con los datos obtenidos y marca que ya no está cargando
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    // Almacena los datos en el caché local para esta URL
    localCache[url] = data;
  };

  // Devuelve los datos y el estado de la petición para ser usados en un componente
  return {
    data: state.data,
    isLoading: state.loading,
    hasError: state.hasError,
    error: state.error,
  };
};
