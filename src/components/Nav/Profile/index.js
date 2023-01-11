import Image from "next/image";
import React from "react";

import Picture from "../../../assets/images/pp.jpeg";
import { Container, Icon } from "./Profile.styles";

const NavProfile = () => {
  return (
    <Container>
      <Image src={Picture} alt="Profile Picture" />
      {/* <Icon /> */}
    </Container>
  );
};

export default NavProfile;
