export const fetcher = (url) => fetch(url).then((res) => res.json());

export const getData = async (path) => {
  const url = `https://api.streamable.moe/api/${path}`;

  const data = await fetcher(url);

  return data;
};
