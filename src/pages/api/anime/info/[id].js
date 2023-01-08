import { api } from "../../../../utils";

export default async function handler(req, res) {
  const { query: queryR } = req;
  const { id, dub: isDub, fetchFiller } = queryR;

  let results = await api.anilist.fetchAnimeInfo(id, isDub, fetchFiller);

  res.status(200).json(results);
}
