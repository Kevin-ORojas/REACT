import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  const onAddCategory = (newCategory) => {
    if (
      categories.some((cat) => cat.toLowerCase() === newCategory.toLowerCase())
    ) {
      return; // Si existe, no hacemos nada
    }
    // valorant
    setCategories([newCategory, ...categories]);
  };
  return (
    <div>
      <h1>Gifs</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GiftGrid key={category} category={category} />
      ))}
    </div>
  );
};
