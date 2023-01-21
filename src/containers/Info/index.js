import React from "react";
import { Episodes } from "../../components";
import { InfoTop } from "../../components/Info";
import { Container } from "../../styles/shared";

const InfoContainer = ({ data }) => {
  return (
    <div>
      <InfoTop {...data} />
      <Container>
        <Episodes {...data} />
      </Container>
    </div>
  );
};

export default InfoContainer;
