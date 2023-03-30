import Dexie from "dexie";

export const db = new Dexie("streamableDB");

// on finish episode move to watched
db.version(1).stores({
  continueWatching: "episodeId, episodeNumber, watchedPercent, anilistId",
  watched: "episodeId, episodeNumber, anilistId",
});
