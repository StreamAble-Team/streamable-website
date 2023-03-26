import React from "react";
import {
  ActualLink,
  DonateMethod,
  DonateMethodLink,
  DonateMethods,
  DonateMethodTitle,
  Separator,
  SubText,
  Title,
  Wrapper,
} from "./DonateContainer.styles";

const DonationContainer = () => {
  return (
    <Wrapper>
      <Title>I am asking for your support</Title>
      <SubText>
        Server costs are increasing, and i need some help covering them
      </SubText>
      <Separator />
      <DonateMethods>
        <DonateMethod>
          <DonateMethodTitle>By me a coffee</DonateMethodTitle>
          <DonateMethodLink>
            <ActualLink href="https://www.buymeacoffee.com/Tdanks2000">
              Buy me a coffee
            </ActualLink>
          </DonateMethodLink>
        </DonateMethod>
        <DonateMethod>
          <DonateMethodTitle>Bitcoin</DonateMethodTitle>
          <DonateMethodLink>
            bc1qgd9c8n3jjcugdr8fcxfdfktpqnp9kszaz3drwu
          </DonateMethodLink>
        </DonateMethod>
      </DonateMethods>
    </Wrapper>
  );
};

export default DonationContainer;
