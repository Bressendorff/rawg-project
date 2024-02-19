import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface DataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
        const [data, setData] = useState<T[]>([]);
        const [error, setError] = useState("");
        const [isLoading, setLoading] = useState(false)

        
        useEffect(() => {
          const abortController = new AbortController();
          setLoading(true);
          apiClient
            .get<DataResponse<T>>(endpoint, {signal: abortController.signal})
            .then((res) => {
              setData(res.data.results);
            })
            .catch((error) => {
              if (error instanceof CanceledError) return;
              setError(error.message) }
              )
            .finally(() => setLoading(false));

            return () => abortController.abort();
        }, []);

        return {data, error, isLoading};
};

export default useData;