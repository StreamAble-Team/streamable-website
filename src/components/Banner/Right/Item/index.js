import React, { useCallback } from "react";
import {
  Container,
  Image,
  ImageContainer,
  LeftContainer,
  Rating,
  RatingContainer,
  RatingIcon,
  RightContainer,
  Subtitle,
  Title,
} from "./Item.styles";

const Item = (props) => {
  const { setIndex, index, setRef } = props;
  const title =
    props.title?.english || props.title?.romaji || props.title?.native;
  const rating = !props?.rating ? "??" : (props?.rating / 10)?.toFixed(1);

  const changeIndex = useCallback(() => {
    setIndex(index);
  }, []);

  return (
    <Container active={props.active} onClick={changeIndex} ref={setRef}>
      <LeftContainer>
        <ImageContainer>
          <Image src={props.image} alt="Logo" />
        </ImageContainer>
      </LeftContainer>
      <RightContainer>
        <Title>{title}</Title>
        <Subtitle>{props?.releaseDate}</Subtitle>
        <RatingContainer>
          {rating !== "??" ? <RatingIcon /> : null}
          <Rating>{rating}</Rating>
        </RatingContainer>
      </RightContainer>
    </Container>
  );
};

export default Item;
