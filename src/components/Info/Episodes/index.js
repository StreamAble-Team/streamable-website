import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Episode from "./Episode/inedx";
import {
  EpisodePill,
  EpisodesContainer,
  EpisodeSelectContainer,
  EpisodesList,
  Title,
  TitleContainer,
} from "./Episodes.styles";

const Episodes = ({ episodes, cover, id, subOrDub }) => {
  const router = useRouter();
  const { episode } = router.query;
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

  const getProviderLS = () => {
    const provider = localStorage.getItem("provider");
    if (provider) return provider;
    return "gogoanime";
  };

  const [provider, setProvider] = useState("gogoanime");

  useEffect(() => {
    setProvider(getProviderLS());
  }, [provider]);

  const realSubOrDub = subOrDub === "dub" ? true : false;
  return (
    <EpisodesContainer>
      {/* <TitleContainer>
        <Title>Episodes</Title>
      </TitleContainer> */}
      <EpisodeSelectContainer>
        {options.length > 1
          ? options.map((option) => (
              <EpisodePill
                key={`episodes-${option.value}`}
                onClick={() => setPage(option.value)}
                active={option.value === page}
              >
                {option.label}
              </EpisodePill>
            ))
          : null}
      </EpisodeSelectContainer>
      <EpisodesList>
        {pageData.map((ep) => {
          return (
            <Episode
              key={`episode-${ep.id}`}
              {...ep}
              backupImage={cover}
              href={`/info/${id}/${ep?.number}?dub=${realSubOrDub}&provider=${provider}`}
              active={Number(ep?.number) === Number(episode)}
            />
          );
        })}
      </EpisodesList>
    </EpisodesContainer>
  );
};

export default Episodes;
