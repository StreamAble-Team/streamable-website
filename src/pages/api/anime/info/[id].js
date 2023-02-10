import axios from "axios";

export default async function handler(req, res) {
  const { query: queryR } = req;
  const { id, dub: isDub = "false", fetchFiller = true } = queryR;

  const { data } = await axios.get(
    `https://api.streamable.moe/api/anilist/info/${id}?dub=${isDub}&fetchFiller=${fetchFiller}`
  );

  res.status(200).json(data);
}
