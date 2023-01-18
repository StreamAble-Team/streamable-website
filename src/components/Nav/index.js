import Image from "next/image";
import NavLink from "./NavLink";
import React, { useState } from "react";

import Logo from "../../assets/images/logo.png";
import {
  Container,
  ImageContainer,
  Links,
  MobileMenuCloseIcon,
  MobileMenuIcon,
  Wrapper,
  MobileMenuContainer,
} from "./Nav.styles";
import Search from "./Search";
import NavProfile from "./Profile";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={Logo} alt="Logo" />
        </ImageContainer>
        <Links show={clicked}>
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/anime"}>Anime</NavLink>
          {/* <NavLink href={"/genres"}>Genres</NavLink> */}
        </Links>
        <Search />
        {/* <NavProfile /> */}
        <MobileMenuContainer>
          <MobileMenuIcon show={!clicked} onClick={() => setClicked(true)} />
          <MobileMenuCloseIcon
            show={clicked}
            onClick={() => setClicked(false)}
          />
        </MobileMenuContainer>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
