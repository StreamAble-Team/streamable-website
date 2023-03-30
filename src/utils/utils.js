import sanitizer from "sanitize-html";
import { db } from "./db";

export const textSanitizer = (textWithHTML) => {
  return sanitizer(textWithHTML, {
    allowedTags: [],
  });
};

export const continueWatching = async (
  anilistObject,
  watchedPercent,
  episodeNumber,
  watched = false
) => {
  if (typeof anilistObject !== "object") return "Invalid Anilist Object";
  if (typeof watchedPercent !== "number") return "Invalid Watched Percent";
  if (typeof episodeNumber !== "number") return "Invalid Episode Number";

  try {
    const { id, episodes } = anilistObject;
    const findEpisode = episodes.find((e) => e.number === episodeNumber);

    if (!findEpisode) return;

    const { id: episodeId } = findEpisode;

    // check if episode is already in watched database
    const checkIfWatched = await db.watched.get(episodeId);
    if (checkIfWatched) return;

    if (watched || watchedPercent >= 85) {
      await db.continueWatching.delete(episodeId);

      const putIntoDB = await db.watched.put(
        {
          anilistId: id,
          episodeId,
          episodeNumber,
        },
        episodeId
      );

      if (!putIntoDB) return;

      return putIntoDB;
    }

    const putIntoDB = await db.continueWatching.put(
      {
        anilistId: id,
        episodeId,
        episodeNumber,
        watchedPercent,
      },
      episodeId
    );

    if (!putIntoDB) return;

    return putIntoDB;
  } catch (error) {
    console.log(error);
  }
};

export const getContinueWatching = async (anilistObject, episodeNumber) => {
  if (typeof anilistObject !== "object") return "Invalid Anilist Object";
  if (typeof episodeNumber !== "number") return "Invalid Episode Number";

  try {
    const { id, episodes } = anilistObject;
    const findEpisode = await episodes.find((e) => e.number === episodeNumber);

    if (!findEpisode) return "No Episode Found";

    const { id: episodeId } = findEpisode;

    const getFromDB = await db.continueWatching.get(episodeId);

    if (!getFromDB) return "No Episode Found";

    return getFromDB;
  } catch (error) {
    console.log(error);
  }
};
