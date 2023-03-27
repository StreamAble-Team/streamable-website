import React from "react";
import {
  ActualLink,
  Container,
  DonateMethod,
  DonateMethodText,
  DonateMethodTitle,
  DonationMethods,
  DonationMethodsSubTitle,
  DonationMethodsTitle,
  LeftContainer,
  RightContainer,
  SubTitle,
  Text,
  Title,
  Wrapper,
} from "./DonateContainer.styles";

import ThankYouImage from "../../assets/images/thankYou.jpg";
import Image from "next/image";

const DonationContainer = () => {
  return (
    <Container>
      <Wrapper>
        <LeftContainer>
          <Image src={ThankYouImage} />
          <Text>
            <Title>I am asking for your support</Title>
            <SubTitle>Thank you for your help!</SubTitle>
          </Text>
        </LeftContainer>
        <RightContainer>
          <DonationMethodsTitle>Make a donation below</DonationMethodsTitle>
          <DonationMethodsSubTitle>
            Server costs are increasing, and i need some help covering them!
            <br />
            <br />
            If you like my work, please consider donating to help me keep this
            site running.
          </DonationMethodsSubTitle>
          <DonationMethods>
            <DonateMethod>
              <DonateMethodTitle>bitcoin</DonateMethodTitle>
              <DonateMethodText>
                bc1qgd9c8n3jjcugdr8fcxfdfktpqnp9kszaz3drwu
              </DonateMethodText>
            </DonateMethod>
            <DonateMethod>
              <DonateMethodTitle>Buy me a coffee</DonateMethodTitle>
              <DonateMethodText>
                <ActualLink href="https://www.buymeacoffee.com/Tdanks2000">
                  https://www.buymeacoffee.com
                </ActualLink>
              </DonateMethodText>
            </DonateMethod>
          </DonationMethods>
        </RightContainer>
      </Wrapper>
    </Container>
  );
};

export default DonationContainer;
