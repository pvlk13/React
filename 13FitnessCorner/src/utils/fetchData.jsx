export const exerciseOptions = {
  method: "GET",
  hostname: "exercisedb.p.rapidapi.com",
  port: null,
  path: "/exercises?limit=10&offset=0",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_APP_RAPID_API_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
