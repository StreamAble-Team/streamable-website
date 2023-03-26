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
import { useRouter } from "next/router";
import Link from "next/link";

const NavBar = () => {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);

  //check if current route is info/...
  const isInfo = router.pathname.includes("info");

  return (
    <Container isInfo={isInfo}>
      <Wrapper>
        <ImageContainer>
          <Link href={"/"}>
            <Image src={Logo} alt="Logo" />
          </Link>
        </ImageContainer>
        <Links show={clicked}>
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/anime"}>Anime</NavLink>
          <NavLink href={"/app"}>App</NavLink>
          <NavLink href={"/donate"}>Donate</NavLink>
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
