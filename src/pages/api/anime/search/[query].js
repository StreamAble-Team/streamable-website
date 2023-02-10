import axios from "axios";

export default async function handler(req, res) {
  const { query: queryR } = req;
  const { query, page, perPage } = queryR;

  const { data } = await axios.get(
    `https://api.streamable.moe/api/anilist/search/${query}?page=${page}&perPage=${perPage}`
  );

  res.status(200).json(data);
}
