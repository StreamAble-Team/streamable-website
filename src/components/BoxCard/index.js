import React from "react";
import {
  BottomContainer,
  BoxCardContainer,
  Genre,
  Genres,
  ImageContainer,
  Rating,
  RatingContainer,
  RatingIcon,
  Title,
  TopContainer,
} from "./BoxCard.styles";

const BoxCard = (props) => {
  let { title, cover, genres, rating } = props;
  title = title?.english || title?.romaji || title?.native;
  rating = !rating ? "??" : (rating / 10).toFixed(1);

  return (
    <BoxCardContainer>
      <TopContainer>
        <ImageContainer src={cover} />
      </TopContainer>
      <BottomContainer>
        <Title>{title}</Title>
        <Genres>
          {genres.map((genre) => (
            <Genre key={genre}>{genre}</Genre>
          ))}
        </Genres>
        {rating === "??" ? (
          <Rating>??</Rating>
        ) : (
          <RatingContainer>
            <RatingIcon />
            <Rating>{rating}</Rating>
          </RatingContainer>
        )}
      </BottomContainer>
    </BoxCardContainer>
  );
};

export default BoxCard;
