import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface DataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(path: string) => {
        const [data, setData] = useState<T[]>([]);
        const [error, setError] = useState("");
        const [isLoading, setLoading] = useState(false)
      
        useEffect(() => {
          setLoading(true);
          apiClient
            .get<DataResponse<T>>(path)
            .then((res) => {
              setData(res.data.results);
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
        }, []);

        return {data, error, isLoading};
};

export default useData;