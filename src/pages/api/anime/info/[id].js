import { load } from "cheerio";
import { api } from "../../../../utils";

export default async function handler(req, res) {
  const { query: queryR } = req;
  const { id, dub: isDub = "false", fetchFiller = true } = queryR;

  try {
    let results = await api.anilist.fetchAnimeInfo(
      id,
      eval(isDub) === false ? false : true,
      fetchFiller
    );

    // do not fetch if dub === false
    if (eval(isDub) === true) {
      let subresults = await api.anilist.fetchAnimeInfo(id, false, fetchFiller);
      results.mappings = subresults.mappings;
    }

    const tvdb_res = await fetch(
      `https://www.thetvdb.com/dereferrer/series/${results?.mappings?.thetvdb}`
    );

    const $ = load(await tvdb_res.text());

    const logo =
      $("#artwork-clearlogo")
        .children()
        .first()
        .children()
        .last()
        .children()
        .last()
        .attr("href") ?? null;

    res.status(200).json({ ...results, logo });
  } catch (err) {
    console.log(err?.message);
  }
}
