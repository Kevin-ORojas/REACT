import { useState } from "react";

export const useCounter = () => {
  const [count, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(count + 1);
  };
  const handleSubstract = () => {
    if (count !== 0) {
      setCounter(count - 1);
    }
  };
  const reset = () => {
    setCounter(0);
  };

  return {
    count,
    handleAdd,
    handleSubstract,
    reset,
  };
};
