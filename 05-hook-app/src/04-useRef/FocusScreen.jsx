import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Ingresa nombre"
        className="form-control"
      />
      <button className="btn btn-primary mt-2" type="text" onclick={onClick}>
        Input Ref
      </button>
    </div>
  );
};
