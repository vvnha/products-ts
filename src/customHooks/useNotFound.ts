import { useEffect, useState } from 'react';

export interface UseNotFoundProps {
  callbackFn: () => void;
}

function useNotFound(props: UseNotFoundProps) {
  const { callbackFn } = props;
  const [isError, setIsError] = useState<Boolean>(false);

  useEffect(() => {
    try {
      callbackFn();
    } catch (error) {
      setIsError(true);
    }
  }, []);

  return {
    isError,
    setIsError,
  };
}

export default useNotFound;
