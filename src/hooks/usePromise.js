import { useEffect, useState } from "react";

const usePromise = (promiseCreatorFn, deps) => {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const f = await promiseCreatorFn();
        setResolved(f);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line
  }, deps);

  return [loading, resolved, error];
};

export default usePromise;
