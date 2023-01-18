import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const { dub } = router.query;

  let { title, totalEpisodes, subOrDub, description, image, rating, id } =
    props;
  title = title?.english || title?.romaji || title?.native;
  rating = !rating ? "??" : (rating / 10)?.toFixed(1);
  const parser = new DOMParser();
  const parsed = parser.parseFromString(description, "text/html").body
    .textContent;

  const realDub = subOrDub === "dub" ? false : true;
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
          <MetaInfoItem clickable={false}>
            {totalEpisodes && totalEpisodes >= 0
              ? `${totalEpisodes} Episodes`
              : "??"}
          </MetaInfoItem>
          <MetaInfoItem clickable={true}>
            <Link href={`/info/${id}?dub=${realDub}`}>
              {subOrDub === "sub" ? `Subbed` : `Dubbed`}
            </Link>
          </MetaInfoItem>
        </TitleContainer>
        <Description>{parsed}</Description>
        {/* <RatingContainer>
          <RatingIcon />
          <Rating>{rating}</Rating>
        </RatingContainer> */}
        <ButtonsContainer>
          <Button main={true} href={`/info/${id}/1?dub=${!realDub}`}>
            Watch Now
          </Button>
          <Button href={`#`}>
            <ShareIcon />
            <span>Share</span>
          </Button>
        </ButtonsContainer>
      </RightContainer>
    </InfoTopContainer>
  );
};

export default InfoTop;
