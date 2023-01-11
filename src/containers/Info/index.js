import React from "react";
import { Episodes } from "../../components";
import { InfoTop } from "../../components/Info";

const InfoContainer = ({ data }) => {
  return (
    <div>
      <InfoTop {...data} />
      <Episodes {...data} />
    </div>
  );
};

export default InfoContainer;
