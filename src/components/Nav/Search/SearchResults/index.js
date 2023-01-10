import React from "react";
import SearchCard from "../SearchCard";
import { Container } from "./SearchResults.styles";

const SearchResults = ({ searchResults }) => {
  if (searchResults.length === 0) return null;
  return (
    <Container>
      {searchResults.map((result) => (
        <SearchCard key={`search-result-${result.id}`} {...result} />
      ))}
    </Container>
  );
};

export default SearchResults;
