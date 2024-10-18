import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

const heavyStuff = () => {
  // Simulate heavy computation
  for (let i = 0; i < 1000; i++) {}
  return "Heavy computation done!";
};

export const MemoHook = () => {
  const { count, handleAdd } = useCounter();

  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(count), [count]);
  return (
    <div>
      <h1>Memorize</h1>

      <hr />

      <h2>{memorizedValue}</h2>

      <button className="btn btn-danger" onClick={() => handleAdd()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
