import { useCallback, useEffect, useState } from "react";

interface IUseFetchOptions {
  immediate?: boolean;
}

interface IUseFetchState<T> {
  data: T | null;
  error: any | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

type TExecuteFunction = () => Promise<void>;
type IUseFetchReturnType<T> = [TExecuteFunction, IUseFetchState<T>];

export function useFetch<T>(
  path: string,
  options: IUseFetchOptions,
  requestOptions?: RequestInit
): IUseFetchReturnType<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isError = error !== null;
  const isSuccess = data !== null;
  const baseUrlPlusPath = import.meta.env.VITE_BASE_URL + path;

  // Set the app_id to be included in the query parameters.
  const finalPath = baseUrlPlusPath.includes("?")
    ? baseUrlPlusPath + `&app_id=${import.meta.env.VITE_APP_ID}`
    : baseUrlPlusPath + `?app_id=${import.meta.env.VITE_APP_ID}`;

  const { immediate } = options;

  const resetFetchState = (): void => {
    setData(null);
    setError(null);
    setIsLoading(true);
  };

  const execute = async () => {
    resetFetchState();

    try {
      const response = await fetch(finalPath, requestOptions);
      const statusCode = response.status.toString();
      const isErrorResponse = new RegExp("^[4|5]").test(statusCode);

      if (isErrorResponse) {
        const resError = await response.json();
        setError(resError);
      } else {
        const resData = await response.json();
        setData(resData);
      }
    } catch (error) {
      console.log("Unhandled error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [immediate]);

  return [execute, { data, error, isError, isLoading, isSuccess }];
}
