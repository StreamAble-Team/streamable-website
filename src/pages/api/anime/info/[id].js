import { api } from "../../../../utils";

export default async function handler(req, res) {
  const { query: queryR } = req;
  const { id, dub: isDub = "false", fetchFiller = true } = queryR;

  let results = await api.anilist.fetchAnimeInfo(
    id,
    eval(isDub) === false ? false : true,
    fetchFiller
  );

  res.status(200).json(results);
}
