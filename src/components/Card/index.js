import React from "react";
import {
  BottomContainer,
  CardContainer,
  Genre,
  Genres,
  ImageContainer,
  Rating,
  RatingContainer,
  RatingIcon,
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
        <ImageContainer src={image} alt={title} height={400} width={400} />
      </TopContainer>
      <BottomContainer>
        <Title>{title}</Title>
        <Genres>
          {!props?.genres.length ? (
            <Genre>??</Genre>
          ) : (
            props.genres.map((genre) => (
              <Genre key={`card-genre-${genre}`}>{genre}</Genre>
            ))
          )}
        </Genres>
        <RatingContainer>
          {rating !== "??" ? <RatingIcon /> : null}
          <Rating>{rating}</Rating>
        </RatingContainer>
      </BottomContainer>
    </CardContainer>
  );
};

export default Card;
