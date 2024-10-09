import React from "react";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHook = () => {
  const { data, hasError, isLoading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/2"
  );
  return (
    <div>
      <h2>MultipleCustomHook</h2>

      {isLoading && <p>Cargando...</p>}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <hr />
      <h1>{data?.name}</h1>
    </div>
  );
};
