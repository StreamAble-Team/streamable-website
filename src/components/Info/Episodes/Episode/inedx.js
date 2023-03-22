import React from "react";
import {
  Container,
  ImageContainer,
  InfoContainer,
  SubTitle,
  Title,
} from "./Episode.styles";

const Episode = (props) => {
  let { id, title, episode, image, number, backupImage, href, active } = props;

  const proxy = `https://proxy.vnxservers.com`;

  return (
    <Container href={href} active={active}>
      <ImageContainer
        src={`${proxy}/${!image ? backupImage : image}`}
        alt={title}
        width={150}
        height={150}
      />
      <InfoContainer>
        <Title>
          {!title ? `Episode ${number}` : `${title} - Episode ${episode}`}
        </Title>
        <SubTitle>{`Episode ${number}`}</SubTitle>
      </InfoContainer>
    </Container>
  );
};

export default Episode;
