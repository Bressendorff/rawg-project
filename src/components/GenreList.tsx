import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-crop";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <div>
      <Text fontWeight="bold" fontSize="22px">
        Genres
      </Text>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} marginY="3">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="30px"
                alt={genre.name}
                borderRadius={5}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="lg"
                colorScheme={
                  genre.id === selectedGenre?.id ? "yellow" : "white"
                }
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
