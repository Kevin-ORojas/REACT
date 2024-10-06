import React from "react";
import { CounterApp } from "./01-usestate/CounterApp";
import { CounterWithCustomHook } from "./01-usestate/CounterWithCustomHook";

export const HookApp = () => {
  return (
    <div>
      <CounterApp />
      <hr />
      <CounterWithCustomHook />
    </div>
  );
};
