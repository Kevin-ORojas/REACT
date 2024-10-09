import React, { useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState({
    data: null,
    loading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  });

  const getFetch = async () => {
    const resp = fetch("https://pokeapi.co/api/v2/pokemon/1");
    const data = await resp.json;

    console.log({ data });
  };
  return {
    data,
  };
};
