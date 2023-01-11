import React, { useEffect } from "react";
import Episode from "./Episode/inedx";
import {
  EpisodePill,
  EpisodesContainer,
  EpisodeSelectContainer,
  EpisodesList,
  Title,
  TitleContainer,
} from "./Episodes.styles";

const Episodes = ({ episodes, cover, id }) => {
  const [page, setPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(50);
  const [totalPages, setTotalPages] = React.useState(1);
  const [totalItems, setTotalItems] = React.useState(0);
  const [pageData, setPageData] = React.useState([]);

  useEffect(() => {
    if (episodes) {
      setTotalItems(episodes.length);
      setTotalPages(Math.ceil(episodes.length / itemsPerPage));
      setPageData(episodes.slice(0, itemsPerPage));
    }
  }, [episodes, itemsPerPage]);

  // useEffect for page change
  useEffect(() => {
    if (episodes) {
      if (page > totalPages) setPage(totalPages);
      if (page < 1) setPage(1);

      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      setPageData(episodes.slice(start, end));
    }
  }, [page, itemsPerPage, episodes]);

  if (!episodes) return null;
  if (!episodes.length) return null;
  const onChange = (e) => {
    console.log(e);
  };

  // create dynamic options for select with value = new page start and length
  const options = [];
  for (let i = 1; i <= totalPages; i++) {
    const start = (i - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    options.push({
      value: i,
      label: `${start + 1} - ${end}`,
    });
  }

  return (
    <EpisodesContainer>
      {/* <TitleContainer>
        <Title>Episodes</Title>
      </TitleContainer> */}
      <EpisodeSelectContainer>
        {options.map((option) => (
          <EpisodePill
            key={option.value}
            onClick={() => setPage(option.value)}
            active={option.value === page}
          >
            {option.label}
          </EpisodePill>
        ))}
      </EpisodeSelectContainer>
      <EpisodesList>
        {pageData.map((episode) => (
          <Episode
            key={episode.id}
            {...episode}
            backupImage={cover}
            href={`/info/${id}/${episode?.number}`}
          />
        ))}
      </EpisodesList>
    </EpisodesContainer>
  );
};

export default Episodes;