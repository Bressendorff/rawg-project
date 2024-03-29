import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface DataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string, 
  requestConfig?: AxiosRequestConfig,
  dependencies?: unknown[]
  ) => {
        const [data, setData] = useState<T[]>([]);
        const [error, setError] = useState("");
        const [isLoading, setLoading] = useState(false)

        
        useEffect(() => {
          const controller = new AbortController();
          setLoading(true);
          apiClient
            .get<DataResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then((res) => setData(res.data.results))
            .catch((error) => {
              if (error instanceof CanceledError) return;
              setError(error);
            })
            .finally(() => {
              if (!controller.signal.aborted) {
                setLoading(false);
              }
            });
      
          return () => controller.abort();
        }, 
        dependencies ? [...dependencies] : []
        );
      
        return { data, isLoading, error };
      };

export default useData;