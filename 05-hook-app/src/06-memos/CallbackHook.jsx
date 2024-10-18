import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

/* el use callback sirve para memorizar funciones.*/

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  //   const incrementFather = () => {
  //     setCounter(counter + 1);
  //   };

  /* El useCallback nos devuelve una versión optimizada de la función que se pasa como argumento.
  Esta versión se utiliza en lugar de la original cuando se pasa como prop a un componente o cuando se utiliza como dependencia de un useEffect. */

  const incrementFather = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  return (
    <div>
      <h2>CallbackHook: {counter}</h2>

      <hr />

      <ShowIncrement increment={incrementFather} />
    </div>
  );
};
