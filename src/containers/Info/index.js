import React from "react";
import { Episodes } from "../../components";
import { InfoTop } from "../../components/Info";
import { Container, ContainerNoPadding } from "../../styles/shared";

const InfoContainer = ({ data }) => {
  return (
    <div>
      <InfoTop {...data} />
      <ContainerNoPadding>
        <Episodes {...data} />
      </ContainerNoPadding>
    </div>
  );
};

export default InfoContainer;
