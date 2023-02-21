import React from "react";
import { Container, Input } from "./SearchBar.styles";

const SearchBar = ({ searchTerm, setSearchTerm, onSubmit }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </Container>
  );
};

export default SearchBar;
