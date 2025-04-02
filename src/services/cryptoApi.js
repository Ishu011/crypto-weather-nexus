import axios from "axios";

export const fetchCryptoData = async () => {
  const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
    params: { vs_currency: "usd", order: "market_cap_desc", per_page: 10 },
  });
  return response.data;
};
