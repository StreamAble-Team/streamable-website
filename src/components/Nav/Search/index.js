import React, { useEffect, useState } from "react";
import { useDebounce } from "../../../hooks";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { SearchContainer } from "./styles";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const search = async (searchTerm) => {
    const searchResults = await fetch(
      `https://api.streamable.moe/api/anilist/search/${searchTerm}`,
      {
        method: "GET",
      }
    );
    const searchResultsJson = await searchResults.json();
    setSearchResults(searchResultsJson.results.slice(0, 5));
  };

  const onSearchSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm.length === 0) {
      setSearchTerm("");
      return setSearchResults([]);
    }
    if (searchTerm.length <= 3) return false;
    search(searchTerm);

    return false;
  };

  useEffect(() => {
    if (debouncedSearchTerm?.length < 2) setSearchResults([]);
    if (!debouncedSearchTerm || debouncedSearchTerm?.length <= 2) return;

    search(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

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
