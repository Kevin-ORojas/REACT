import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const {
    onResetForm,
    handleInputChange,
    formstate,
    username,
    email,
    password,
  } = useForm({
    username: "",
    email: "",
    password: "",
  });
  return (
    <>
      <h1>Formulario with FormWithCustomHook</h1>
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={handleInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="email"
        name="email"
        value={email}
        onChange={handleInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={handleInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">
        borrar
      </button>
    </>
  );
};
