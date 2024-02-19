import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <div>
      {genres.map((g) => (
        <div key={g.id}>{g.name}</div>
      ))}
    </div>
  );
};

export default GenreList;
