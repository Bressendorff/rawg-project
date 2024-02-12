import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

// interface GameResponse {
//   count: number;
//   result: Game[];
// }

interface Game {
  id: number;
  name: string;
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      "https://api.rawg.io/api/games?key=625cef27d6f940b78de251925cf11566",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((response) => setGames(response.results))
      .catch((error) => setError("Error: " + error.message));
  });

  return (
    <div>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
