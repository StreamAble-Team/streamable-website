import React from "react";
import {
  Button,
  ButtonIcon,
  ButtonsContainer,
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
  ShareIcon,
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
        <ImageContainer>
          <Image src={image} />
        </ImageContainer>
      </LeftContainer>
      <RightContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <MetaInfoItem>
            {totalEpisodes && totalEpisodes >= 0
              ? `${totalEpisodes} Episodes`
              : "??"}
          </MetaInfoItem>
          <MetaInfoItem>
            {subOrDub === "sub" ? `Subbed` : `Dubbed`}
          </MetaInfoItem>
        </TitleContainer>
        <Description>{parsed}</Description>
        {/* <RatingContainer>
          <RatingIcon />
          <Rating>{rating}</Rating>
        </RatingContainer> */}
        <ButtonsContainer>
          <Button main={true}>Watch Now</Button>
          <Button>
            <ShareIcon />
            <span>Share</span>
          </Button>
        </ButtonsContainer>
      </RightContainer>
    </InfoTopContainer>
  );
};

export default InfoTop;
