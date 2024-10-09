import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      loading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    setLoadingState();
    const resp = await fetch(url);

    //sleep
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (!resp.ok) {
      setState({
        data: null,
        loading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }

    const data = await resp.json();
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    console.log({ data });
  };

  return {
    data: state.data,
    isLoading: state.loading,
    hasError: state.hasError,
    error: state.error,
  };
};
