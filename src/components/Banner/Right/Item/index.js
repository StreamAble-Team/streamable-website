import React, { useCallback } from "react";
import {
  Container,
  Image,
  ImageContainer,
  LeftContainer,
  Rating,
  RightContainer,
  Subtitle,
  Title,
} from "./Item.styles";

const Item = (props) => {
  const { setIndex, index } = props;
  const title =
    props.title?.english || props.title?.romaji || props.title?.native;

  const changeIndex = useCallback(() => {
    setIndex(index);
  }, []);

  return (
    <Container active={props.active} onClick={changeIndex}>
      <LeftContainer>
        <ImageContainer>
          <Image src={props.image} alt="Logo" />
        </ImageContainer>
      </LeftContainer>
      <RightContainer>
        <Title>{title}</Title>
        <Subtitle>{props?.releaseDate}</Subtitle>
        <Rating>{(props?.rating / 10)?.toFixed(1)}</Rating>
      </RightContainer>
    </Container>
  );
};

export default Item;
