import React, { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [formState, setFormstate] = useState(initialValue);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormstate({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormstate(initialValue);
  };

  return {
    ...formState,
    formState,
    handleInputChange,
    onResetForm,
  };
};
