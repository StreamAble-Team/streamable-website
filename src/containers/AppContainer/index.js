import React from "react";
import {
  Button,
  LeftContainer,
  RightContainer,
  SubText,
  Title,
  Container,
  Wrapper,
  ImageContainer,
  DownloadButton,
} from "./AppContainer.styles";

import appShowOff from "../../assets/images/app-show-off.png";
import Image from "next/image";

const AppContainer = () => {
  return (
    <Container>
      <Wrapper>
        {/* <Title>Streamable Android App</Title> */}
        <ImageContainer>
          <LeftContainer>
            <SubText>Want a better experience on a mobile device?</SubText>
            <SubText>
              Only available on android devices for the time being
            </SubText>
            <DownloadButton
              href={
                "https://github.com/StreamAble-Team/StreamAble-app/releases"
              }
            >
              Download
            </DownloadButton>
          </LeftContainer>
          <Image src={appShowOff} />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default AppContainer;
