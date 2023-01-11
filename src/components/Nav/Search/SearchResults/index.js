import React from "react";
import SearchCard from "../SearchCard";
import { Container } from "./SearchResults.styles";

const SearchResults = ({ searchResults, setSearchResults, setSearchTerm }) => {
  if (searchResults.length === 0) return null;

  const handleHide = () => {
    setSearchResults([]);
    setSearchTerm("");
  };

  return (
    <Container>
      {searchResults.map((result) => (
        <SearchCard
          key={`search-result-${result.id}`}
          {...result}
          handleHide={handleHide}
        />
      ))}
    </Container>
  );
};

export default SearchResults;
