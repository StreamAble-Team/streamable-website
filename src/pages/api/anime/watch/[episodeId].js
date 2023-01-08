import { META, PROVIDERS_LIST } from "@consumet/extensions";
import { api } from "../../../../utils";

export default async function handler(req, res) {
  const { query: queryR } = req;
  const { episodeId, provider, server } = queryR;

  let anilist = api.anilist;

  if (typeof provider !== "undefined") {
    const possibleProvider = PROVIDERS_LIST.ANIME.find(
      (p) => p.name.toLowerCase() === provider.toLocaleLowerCase()
    );
    anilist = new META.Anilist(possibleProvider);
  }

  let results = await anilist.fetchEpisodeSources(episodeId, server);

  res.status(200).json(results);
}
