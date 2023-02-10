import axios from "axios";

export default async function handler(req, res) {
  const { query } = req;
  const {
    type,
    page = 1,
    perPage = 20,
    weekStart,
    weekEnd,
    notYetAired,
  } = query;

  let results = [];

  switch (type?.toLowerCase()) {
    case "trending":
      const { data: trendingData } = await axios.get(
        `https://api.streamable.moe/api/anilist/trending?page=${page}&perPage=${perPage}`
      );
      results = trendingData;
      break;
    case "popular":
      const { data: popularData } = await axios.get(
        `https://api.streamable.moe/api/anilist/popular?page=${page}&perPage=${perPage}`
      );
      results = popularData;
      break;
    case "airing-schedule":
      const { data: airingScheduleData } = await axios.get(
        `https://api.streamable.moe/api/anilist/airing-schedule?weekStart=${weekStart}&weekEnd=${weekEnd}&notYetAired=${notYetAired}`
      );
      results = airingScheduleData;
      break;
    case "top-rated":
      const { data: topRatedData } = await axios.get(
        `https://api.streamable.moe/api/anilist/top-rated?page=${page}&perPage=${perPage}`
      );
      results = topRatedData;
      break;
    case "upcoming":
      const { data: upcomingData } = await axios.get(
        `https://api.streamable.moe/api/anilist/upcoming?page=${page}&perPage=${perPage}`
      );
      results = upcomingData;
      break;
    default:
      results = [];
      break;
  }

  res.status(200).json(results);
}
