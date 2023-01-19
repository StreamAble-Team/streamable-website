import React from "react";
import { utils } from "../../../utils";
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
  const parsed = utils.textSanitizer(data?.description);

  return (
    <Container href={`/info/${data?.id}`}>
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
