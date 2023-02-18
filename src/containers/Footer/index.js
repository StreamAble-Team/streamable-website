import React from "react";
import { Container, ContainerNoPadding } from "../../styles/shared";
import {
  FooterWrapper,
  Icons,
  Logo,
  Text,
  TextContainer,
} from "./Footer.styles";

import LogoImage from "../../assets/images/logo.png";
import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";

const FooterContainer = () => {
  return (
    <FooterWrapper>
      <ContainerNoPadding>
        <Logo src={LogoImage} />
        <TextContainer>
          <Text>Copyright © StreamAble. All Rights Reserved</Text>
          <Text>
            This site does not store any files on its server.
            <br />
            All contents are provided by non-affiliated third parties.
          </Text>
          <Icons>
            <Link
              href={"https://github.com/StreamAble-Team/StreamAble-website"}
              target="_blank"
            >
              <FaGithub />
            </Link>
            <Link href={"https://discord.gg/jm6GArH3QE"} target="_blank">
              <FaDiscord />
            </Link>
          </Icons>
        </TextContainer>
      </ContainerNoPadding>
    </FooterWrapper>
  );
};

export default FooterContainer;
