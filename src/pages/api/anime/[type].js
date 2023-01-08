import { api } from "../../../utils";

export default async function handler(req, res) {
  const { query } = req;
  const { type, page, perPage, weekStart, weekEnd, notYetAired } = query;

  let results = [];

  switch (type.toLowerCase()) {
    case "trending":
      results = await api.anilist.fetchTrendingAnime(page, perPage);
      break;
    case "popular":
      results = await api.anilist.fetchPopularAnime(page, perPage);
      break;
    case "airing-schedule":
      results = await api.anilist.fetchAiringSchedule(
        page,
        perPage,
        weekStart,
        weekEnd,
        notYetAired
      );
      break;
    default:
      results = await api.anilist.fetchRandomAnime();
      break;
  }

  res.status(200).json(results);
}
