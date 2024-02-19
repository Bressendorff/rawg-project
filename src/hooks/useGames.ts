import useData from "./useData";

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
        return useData<Game>("games");
  }

  export default useGames;