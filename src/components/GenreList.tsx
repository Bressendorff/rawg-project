import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {genres.map((g) => (
        <div key={g.id}>{g.name}</div>
      ))}
    </div>
  );
};

export default GenreList;
