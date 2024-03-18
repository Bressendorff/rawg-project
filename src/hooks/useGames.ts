import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

  export interface Game {
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
    parent_platforms: {platform: Platform}[];
  }

  const useGames = (gameQuery: GameQuery) => {
        return useData<Game>(
          "games", 
          { 
            params: {
              genres: gameQuery?.genre?.id,
              parent_platforms: gameQuery?.platform?.id,
              ordering: gameQuery?.sortOrder,
            search: gameQuery?.searchText,
          search_exact: true} },
          [gameQuery]);
  }

  export default useGames;