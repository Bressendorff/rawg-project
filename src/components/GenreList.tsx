import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-crop";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();

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
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
