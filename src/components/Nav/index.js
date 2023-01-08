import Image from "next/image";
import NavLink from "./NavLink";
import React from "react";

import Logo from "../../assets/images/logo.png";
import { Container, ImageContainer, Links } from "./Nav.styles";
import Search from "./Search";

const NavBar = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={Logo} alt="Logo" />
      </ImageContainer>
      <Links>
        <NavLink href={"/"}>Home</NavLink>
        <NavLink href={"/Anime"}>Anime</NavLink>
        <NavLink href={"/Genres"}>Genres</NavLink>
      </Links>
      <Search />
    </Container>
  );
};

export default NavBar;
