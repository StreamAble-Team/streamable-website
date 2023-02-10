import axios from "axios";

export default async function handler(req, res) {
  const { query: queryR } = req;
  const { episodeId, provider, server } = queryR;

  const { data } = await axios.get(
    `https://api.streamable.moe/api/anilist/watch/${episodeId}?provider=${provider}&server=${server}`
  );

  res.status(200).json(data);
}
