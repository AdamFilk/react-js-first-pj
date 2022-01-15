import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const abort = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abort.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Cannot Fetch Data :(");
          }
          return res.json();
        })
        .then((datas) => {
          setData(datas);
          setIsLoading(false);
          setErrorMessage(null);
        })
        .catch((err) => {
          if (err.name == "AbortError") {
            console.log("abort the bitch");
          } else {
            setIsLoading(false);
            console.log(err.message);
            setErrorMessage(err.message);
          }
        });
    }, 1000);
    return () => abort.abort();
  }, []);
  return { data, isLoading, errorMessage };
};

export default useFetch;
