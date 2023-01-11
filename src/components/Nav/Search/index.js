import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { SearchContainer } from "./styles";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const onSearchSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm.length === 0) {
      setSearchTerm("");
      return setSearchResults([]);
    }
    if (searchTerm.length <= 3) return false;
    const searchResults = await fetch(`/api/anime/search/${searchTerm}`, {
      method: "GET",
    });
    const searchResultsJson = await searchResults.json();
    setSearchResults(searchResultsJson.results.slice(0, 5));
  };

  return (
    <SearchContainer>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSubmit={onSearchSubmit}
      />
      <SearchResults
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
    </SearchContainer>
  );
};

export default Search;
