import { useState } from "react";

const useFetch = (apiFunc) => {
  const [isFetching, setFetching] = useState(false);
  const [data, setResponse] = useState();

  const fetch = (params) => {
    setFetching(() => {
      apiFunc(params)
        .then(({ data }) => {
          setResponse(data.payload);
          setFetching(false);
        })
        .catch((error) => {
          console.log(error);
        });
      return true;
    });
  };

  return { isFetching, fetch, data };
};

export default useFetch;
