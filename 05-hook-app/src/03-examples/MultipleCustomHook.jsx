import React from "react";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHook = () => {
  useFetch();
  return (
    <div>
      <h2>MultipleCustomHook</h2>
    </div>
  );
};
