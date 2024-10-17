import React, { memo } from "react";

/**Memo es una funcion que le indica a react . ME MORIZA ESTE componente */

export const Small = memo(({ value }) => {
  console.log("me volvi a dibujar :S");
  return (
    <div>
      <small>{value}</small>
    </div>
  );
});
