import React from "react";
import { Container, Input } from "./SearchBar.styles";

const SearchBar = () => {
  return (
    <Container>
      <Input type="text" placeholder="Search" />
    </Container>
  );
};

export default SearchBar;
