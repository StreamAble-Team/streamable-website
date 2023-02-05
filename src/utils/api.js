import { META, ANIME, PROVIDERS_LIST } from "@consumet/extensions";

// const provider = PROVIDERS_LIST.ANIME.find(
//   (p) => p.name.toLowerCase() === "zoro"
// );

const BASEURL = process.env.ZORO_BASE_URL;

const zoro = new ANIME.Zoro(BASEURL);

export const anilist = new META.Anilist(zoro);

export const fetcher = (url) => fetch(url).then((res) => res.json());
