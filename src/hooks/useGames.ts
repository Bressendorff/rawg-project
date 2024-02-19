import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface GameResponse {
    count: number;
    results: Game[];
  }
  
  export interface Game {
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
    parent_platforms: {platform: Platform}[];
  }

  export interface Platform {
    id: number;
    name: string;
    slug: string;
  }

  const useGames = () => {
        const [games, setGames] = useState<Game[]>([]);
        const [error, setError] = useState("");
        const [isLoading, setLoading] = useState(false)
      
        useEffect(() => {
          setLoading(true);
          apiClient
            .get<GameResponse>("games")
            .then((res) => {
              setGames(res.data.results);
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
        }, []);

        return {games, error, isLoading};
  }

  export default useGames;