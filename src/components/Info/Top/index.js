import React from "react";
import {
  Description,
  Image,
  ImageContainer,
  InfoTopContainer,
  LeftContainer,
  MetaInfoItem,
  Rating,
  RatingContainer,
  RatingIcon,
  RightContainer,
  Title,
  TitleContainer,
} from "./Top.styles";

const InfoTop = (props) => {
  let { title, totalEpisodes, subOrDub, description, image, rating } = props;
  title = title?.english || title?.romaji || title?.native;
  rating = !rating ? "??" : (rating / 10)?.toFixed(1);
  const parser = new DOMParser();
  const parsed = parser.parseFromString(description, "text/html").body
    .textContent;

  return (
    <InfoTopContainer>
      <LeftContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <MetaInfoItem>
            {totalEpisodes >= 0 ? `${totalEpisodes} Episodes` : "??"}
          </MetaInfoItem>
          <MetaInfoItem>
            {subOrDub === "sub" ? `Subbed` : `Dubbed`}
          </MetaInfoItem>
        </TitleContainer>
        <RatingContainer>
          <RatingIcon />
          <Rating>{rating}</Rating>
        </RatingContainer>
        <Description>{parsed}</Description>
      </LeftContainer>
      <RightContainer>
        <ImageContainer>
          <Image src={image} />
        </ImageContainer>
      </RightContainer>
    </InfoTopContainer>
  );
};

export default InfoTop;
