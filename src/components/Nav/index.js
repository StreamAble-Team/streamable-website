import Image from "next/image";
import NavLink from "./NavLink";
import React from "react";

import Logo from "../../assets/images/logo.png";
import { Container, ImageContainer, Links, Wrapper } from "./Nav.styles";
import Search from "./Search";
import NavProfile from "./Profile";

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={Logo} alt="Logo" />
        </ImageContainer>
        <Links>
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/Anime"}>Anime</NavLink>
          <NavLink href={"/Genres"}>Genres</NavLink>
        </Links>
        <Search />
        <NavProfile />
      </Wrapper>
    </Container>
  );
};

export default NavBar;
