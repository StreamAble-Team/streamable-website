import { api } from "../../../../utils";

export default async function handler(req, res) {
  const { query: queryR } = req;
  const { query, page, perPage } = queryR;

  let results = await api.anilist.search(query, page, perPage);
  res.status(200).json(results);
}
