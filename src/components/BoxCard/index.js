import Link from "next/link";
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
  let { title, cover, genres, rating, id } = props;
  title = title?.english || title?.romaji || title?.native;
  rating = !rating ? "??" : (rating / 10).toFixed(1);

  return (
    <BoxCardContainer>
      <Link href={`/info/${id}`}>
        <TopContainer>
          <ImageContainer src={cover} alt={title} width={400} height={400} />
        </TopContainer>
        <BottomContainer>
          <Title>{title}</Title>
          <Genres>
            {genres.map((genre) => (
              <Genre key={`genre-${genre}`}>{genre}</Genre>
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
      </Link>
    </BoxCardContainer>
  );
};

export default BoxCard;
