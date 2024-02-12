import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface GameResponse {
  count: number;
  results: Game[];
}

interface Game {
  id: number;
  name: string;
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GameResponse>("games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((error) => setError(error.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      {games && (
        <ul>
          {games.map((game) => (
            <li>{game.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default GameGrid;