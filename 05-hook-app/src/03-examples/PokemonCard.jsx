import React from "react";

export const PokemonCard = ({ id, name, sprites }) => {
  return (
    <section style={{ height: 200 }}>
      <h2 className="text-capitalize">
        #{id} - {name}
      </h2>

      {/* Imagenes */}

      <div>
        {sprites.map((sprite) => (
          <img
            key={sprite}
            alt={name}
            src={sprite}
            style={{ width: 100, height: 100 }}
          />
        ))}
      </div>
    </section>
  );
};
