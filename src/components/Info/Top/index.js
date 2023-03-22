import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ContainerNoPadding } from "../../../styles/shared";
import { utils } from "../../../utils";
import {
  Button,
  ButtonIcon,
  ButtonsContainer,
  Description,
  EnglishTitle,
  Fade,
  Image,
  ImageContainer,
  Img,
  InfoTopContainer,
  LeftContainer,
  Logo,
  MetaInfoContainer,
  MetaInfoItem,
  Rating,
  RatingContainer,
  RatingIcon,
  RightContainer,
  ShareIcon,
  Title,
  TitleContainer,
  Wrapper,
} from "./Top.styles";

const InfoTop = (props) => {
  const router = useRouter();
  const { dub } = router.query;

  let {
    title,
    totalEpisodes,
    subOrDub,
    description,
    image,
    cover,
    rating,
    id,
    type,
    releaseDate,
    logo,
  } = props;
  title = title?.english || title?.romaji || title?.native;
  rating = !rating ? "??" : (rating / 10)?.toFixed(1);

  const parsed = utils.textSanitizer(description);

  const realDub = subOrDub === "dub" ? false : true;

  const getProviderLS = () => {
    const provider = localStorage.getItem("provider");
    if (provider) return provider;
    return "gogoanime";
  };

  const [provider, setProvider] = useState("gogoanime");

  useEffect(() => {
    setProvider(getProviderLS());
  }, [provider]);

  const proxy = `https://proxy.vnxservers.com`;
  return (
    <InfoTopContainer src={cover}>
      <Img src={cover} width={1920} height={1080} />
      <Fade />
      <Wrapper>
        <ContainerNoPadding>
          {!logo ? null : (
            <Logo src={`${proxy}/${logo}`} width={300} height={300} />
          )}
          <TitleContainer>
            <EnglishTitle>{title}</EnglishTitle>
          </TitleContainer>
          <MetaInfoContainer>
            <MetaInfoItem clickable={false}>
              {totalEpisodes && totalEpisodes >= 0
                ? `${totalEpisodes} Episodes`
                : "??"}
            </MetaInfoItem>
            {!subOrDub ? null : (
              <MetaInfoItem clickable={true}>
                <Link href={`/info/${id}?dub=${realDub}&provider=${provider}`}>
                  {subOrDub === "sub" ? `Subbed` : `Dubbed`}
                </Link>
              </MetaInfoItem>
            )}
            {!type ? null : (
              <MetaInfoItem clickable={false}>{type}</MetaInfoItem>
            )}
            {!releaseDate ? null : (
              <MetaInfoItem clickable={false}>{releaseDate}</MetaInfoItem>
            )}
          </MetaInfoContainer>
          <Description>{parsed}</Description>
        </ContainerNoPadding>
      </Wrapper>
      {/* <LeftContainer>
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
        <Description>{parsed}</Description> */}
      {/* <RatingContainer>
          <RatingIcon />
          <Rating>{rating}</Rating>
        </RatingContainer> */}
      {/* <ButtonsContainer>
          <Button main={true} href={`/info/${id}/1?dub=${!realDub}`}>
            Watch Now
          </Button>
          <Button href={`#`}>
            <ShareIcon />
            <span>Share</span>
          </Button>
        </ButtonsContainer>
      </RightContainer> */}
    </InfoTopContainer>
  );
};

export default InfoTop;
