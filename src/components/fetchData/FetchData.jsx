import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

export const getExchangeRate = (fromCurrency, toCurrency) => {
  const options = {
    method: "GET",
    url: "https://alpha-vantage.p.rapidapi.com/query",
    params: { from_currency: fromCurrency, function: "CURRENCY_EXCHANGE_RATE", to_currency: toCurrency },
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com"
    }
  };

  return axios
    .request(options)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};
