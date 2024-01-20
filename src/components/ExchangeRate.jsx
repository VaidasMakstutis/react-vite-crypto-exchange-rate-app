import { useState } from "react";
import { Typography, Select } from "antd";
import { cryptoCurrencies, fiatCurrencies } from "./currencies/currencies";
import { ExchangeRateUI } from "./UI/ExchangeRateUI";

export const ExchangeRate = () => {
  const [fromCurrency, setFromCurrency] = useState(cryptoCurrencies[0].value);
  const [toCurrency, setToCurrency] = useState(fiatCurrencies[0].value);

  const handleFromCurrencyChange = e => {
    setFromCurrency(e);
    console.log(e);
  };

  const handleToCurrencyChange = e => {
    setToCurrency(e);
    console.log(e);
  };

  return (
    <section className="exchange-rate">
      <Typography.Title style={{ color: "#4d4add" }} level={2}>
        Exchange Rate
      </Typography.Title>
      <Typography.Text>Get the latest exchange rate of cryptocurrencies in your favorite currency</Typography.Text>
      <section className="select-group" style={{ display: "flex", marginTop: "1rem", gap: "1rem", justifyContent: "space-around" }}>
        <Select defaultValue={cryptoCurrencies[0].value} options={cryptoCurrencies} onChange={handleFromCurrencyChange} />
        <Select defaultValue={fiatCurrencies[0].value} options={fiatCurrencies} onChange={handleToCurrencyChange} />
      </section>
      <section style={{ marginTop: "1rem" }}>
        <ExchangeRateUI />
      </section>
    </section>
  );
};
