import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { LodingMessage } from "./LodingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHook = () => {
  const { count, handleAdd, handleSubstract } = useCounter(1);

  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${count}`
  );

  return (
    <div>
      <h2>MultipleCustomHook</h2>

      {isLoading ? (
        <LodingMessage />
      ) : (
        <PokemonCard
          id={count}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.back_default,
            data.sprites.front_shiny,
            data.sprites.back_shiny,
          ]}
        />
      )}

      <button onClick={handleAdd} className="btn btn-primary mt-2">
        siguiente
      </button>

      <button
        onClick={() => (count > 1 ? handleSubstract() : null)}
        className="btn btn-primary mt-2"
      >
        anterior
      </button>
    </div>
  );
};
