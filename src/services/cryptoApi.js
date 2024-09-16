const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-WURbn3etQEVDMVhHHT2Qu5yw";
const getCoinList = (page, currency) =>
  `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&locale=en&x_cg_demo_api_key=${API_KEY}`;
const getSearchedCoins = (query) =>
  `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`;
const marketCaps = (coin) =>
  `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7&x_cg_demo_api_key=${API_KEY}`;
export { getCoinList, getSearchedCoins, marketCaps };
