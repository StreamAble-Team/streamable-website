import React from "react";
import {
  BottomContainer,
  CardContainer,
  Genre,
  Genres,
  ImageContainer,
  Rating,
  Title,
  TopContainer,
  Wrapper,
} from "./Card.styles";

const Card = (props) => {
  let { id, title, image, rating } = props;
  title = title?.english || title?.romaji || title?.native;
  rating = rating / 10 === 0 ? "??" : (rating / 10).toFixed(1);

  return (
    <CardContainer href={`/info/${id}`}>
      <TopContainer>
        <ImageContainer background={image} />
      </TopContainer>
      <BottomContainer>
        <Title>{title}</Title>
        <Genres>
          {!props?.genres.length ? (
            <Genre>??</Genre>
          ) : (
            props.genres.map((genre) => <Genre key={genre}>{genre}</Genre>)
          )}
        </Genres>
        <Rating>{rating}</Rating>
      </BottomContainer>
    </CardContainer>
  );
};

export default Card;
