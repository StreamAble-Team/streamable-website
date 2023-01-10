import React from "react";
import { InfoTop } from "../../components/Info";

const InfoContainer = ({ data }) => {
  return (
    <div>
      <InfoTop {...data} />
    </div>
  );
};

export default InfoContainer;
