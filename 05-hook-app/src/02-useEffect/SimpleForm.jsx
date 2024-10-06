import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formstate, setFormstate] = useState({
    username: "kevin",
    email: "kevin@gmail.com",
  });

  const { username, email } = formstate;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormstate({
      ...formstate,
      [name]: value,
    });
  };

  //se recomienda hacer efectos especificos por cada efecto que quiera cambiar
  useEffect(() => {
    console.log("useefect called!");
  }, []);

  useEffect(() => {
    console.log("formstate change!");
  }, [formstate]);

  useEffect(() => {
    console.log("email change!");
  }, [email]);

  return (
    <>
      <h1>Formulario simple</h1>
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
        placeholder="username"
        name="email"
        value={email}
        onChange={handleInputChange}
      />

      {username === "kevin" && <Message />}
    </>
  );
};
