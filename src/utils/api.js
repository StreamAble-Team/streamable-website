import { META, ANIME, PROVIDERS_LIST } from "@consumet/extensions";

const provider = PROVIDERS_LIST.ANIME.find(
  (p) => p.name.toLowerCase() === "zoro"
);

export const anilist = new META.Anilist(provider);

export const fetcher = (url) => fetch(url).then((res) => res.json());
