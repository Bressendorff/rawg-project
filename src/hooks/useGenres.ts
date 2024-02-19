import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface GenreResponse {
    results: Genre[]
}

export interface Genre {
    id: number;
    name: string;
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        apiClient
        .get<GenreResponse>("genres")
        .then((response) => setGenres(response.data.results))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }
    );

    return {genres, error, isLoading}
}

export default useGenres;