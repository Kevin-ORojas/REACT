import React, { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("one punch");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setCategories([...categories, inputValue]);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      {" "}
      <input
        type="text"
        value={inputValue}
        placeholder="Buscar un video"
        onChange={onInputChange}
      />
    </form>
  );
};
