import React from "react";
import Image from "next/image";
import {
  Button,
  Container,
  LeftContainer,
  RightContainer,
  SubText,
  Title,
} from "./404.styles";

import error404 from "../../assets/images/error404.png";

const Four0FourContainer = () => {
  return (
    <Container>
      <LeftContainer>
        <Image src={error404} alt="error 404" />
      </LeftContainer>
      <RightContainer>
        <Title>Error 404</Title>
        <SubText>Sorry, page not found.</SubText>
        <SubText>go back to the home page</SubText>
        <Button href={"/"}>Go back home</Button>
      </RightContainer>
    </Container>
  );
};

export default Four0FourContainer;
