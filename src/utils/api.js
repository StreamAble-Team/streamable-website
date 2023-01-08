import { META } from "@consumet/extensions";

export const anilist = new META.Anilist();

export const fetcher = (url) => fetch(url).then((res) => res.json());
