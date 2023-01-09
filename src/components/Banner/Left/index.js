import React from "react";
import {
  Container,
  Description,
  Item,
  ItemContainer,
  Title,
  Wrapper,
} from "./Left.styles";

const LeftSideBanner = ({ data }) => {
  const title =
    data?.title?.english || data?.title?.romaji || data?.title?.native;
  const parser = new DOMParser();
  const parsed = parser.parseFromString(data?.description, "text/html").body
    .textContent;

  return (
    <Container>
      <Item background={data?.cover}>
        <Wrapper>
          <ItemContainer>
            <Title>{title}</Title>
            <Description>{parsed}</Description>
          </ItemContainer>
        </Wrapper>
      </Item>
    </Container>
  );
};

export default LeftSideBanner;
