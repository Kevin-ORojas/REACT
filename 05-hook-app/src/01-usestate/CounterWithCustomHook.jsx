import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { handleAdd, reset, count, handleSubstract } = useCounter();
  return (
    <div>
      <h1>Counter with custom hook {count} </h1>
      <hr />

      <button onClick={handleAdd} className="btn btn-primary">
        +1
      </button>
      <button onClick={reset} className="btn btn-primary">
        reset
      </button>
      <button onClick={handleSubstract} className="btn btn-primary">
        -1
      </button>
    </div>
  );
};
