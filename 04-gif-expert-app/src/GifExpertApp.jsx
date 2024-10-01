import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Planeta juan", "dragon ball"]);

  const onAddNewCategories = () => {
    // valorant
    setCategories([...categories, "valorant"]);
  };
  return (
    <div>
      <h1>Over View List youtu</h1>

      {/* input */}
      <AddCategory setCategories={setCategories} />
      {/* listado de videos */}
      <button onClick={onAddNewCategories}>agregar</button>
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>

      {/* item de videoss */}
    </div>
  );
};
