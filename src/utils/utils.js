import sanitizer from "sanitize-html";
import db from "./db";

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
  if (typeof anilistObject !== "object") return;
  if (typeof watchedPercent !== "number") return;
  if (typeof episodeNumber !== "number") return;

  try {
    const { id, episodes } = anilistObject;
    const findEpisode = episodes.find((e) => e.number === episodeNumber);

    if (!findEpisode) return;

    const { id: episodeId } = findEpisode;

    if (watched || watchedPercent >= 85) {
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
