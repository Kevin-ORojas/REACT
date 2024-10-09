import React from "react";
import { CounterApp } from "./01-usestate/CounterApp";
import { CounterWithCustomHook } from "./01-usestate/CounterWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { MultipleCustomHook } from "./03-examples/MultipleCustomHook";

export const HookApp = () => {
  return (
    <div>
      {/* <CounterApp />
      <hr />
      <CounterWithCustomHook />

      <hr />
      <SimpleForm />

      <hr /> */}
      {/* 
      <FormWithCustomHook /> */}

      <MultipleCustomHook />
    </div>
  );
};
