import React from "react";
import {
  Container,
  Genre,
  Genres,
  ImageContainer,
  ReleaseDate,
  ReleaseDateContainer,
  Title,
  TitleContainer,
} from "./SearchCard.styles";

const SearchCard = (props) => {
  let { id, title, image, cover, genres, releaseDate, handleHide } = props;
  title = title?.english || title?.romaji || title?.native;

  return (
    <Container href={`/info/${id}`} onClick={handleHide}>
      <ImageContainer src={image} />
      <TitleContainer>
        <Title>{title}</Title>
        <Genres>
          {genres.map((genre) => (
            <Genre key={`genre-${genre}`}>{genre}</Genre>
          ))}
        </Genres>
      </TitleContainer>
      <ReleaseDateContainer>
        <ReleaseDate>{releaseDate || "??"}</ReleaseDate>
      </ReleaseDateContainer>
    </Container>
  );
};

export default SearchCard;
