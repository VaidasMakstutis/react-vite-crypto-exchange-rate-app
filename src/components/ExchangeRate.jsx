import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getExchangeRate } from "./fetchData/FetchData";
import { Typography, Select, Spin } from "antd";
import { cryptoCurrencies, fiatCurrencies } from "./currencies/Currencies";
import { ExchangeRateUI } from "./UI/ExchangeRateUI";

export const ExchangeRate = () => {
  const [fromCurrency, setFromCurrency] = useState(cryptoCurrencies[0].value);
  const [toCurrency, setToCurrency] = useState(fiatCurrencies[0].value);
  const [currencySymbol, setCurrencySymbol] = useState("Bitcoin");

  const handleFromCurrencyChange = e => {
    setFromCurrency(e);
  };

  const handleToCurrencyChange = e => {
    setToCurrency(e);
  };

  useEffect(() => {
    const fromCurrencyLabel = cryptoCurrencies.find(currency => currency.value === fromCurrency)?.label;
    setCurrencySymbol(fromCurrencyLabel);
  }, [fromCurrency]);

  const dependencies = {
    fromCurrency: fromCurrency,
    toCurrency: toCurrency
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["exchangeRate", dependencies],
    queryFn: () => getExchangeRate(fromCurrency, toCurrency),
    staleTime: 1000 * 60,
    retry: 1,
    retryDelay: 6000
  });

  return (
    <section className="exchange-rate">
      <Typography.Title style={{ color: "#4d4add", textAlign: "center", paddingTop: "2rem" }} level={2}>
        Exchange Rate
      </Typography.Title>
      <Typography.Text style={{ padding: "1.5rem", fontSize: "1rem", display: "flex", justifyContent: "center" }}>
        Get the latest exchange rate of cryptocurrencies in your favorite currency
      </Typography.Text>
      <section className="select-group" style={{ display: "flex", marginTop: "1rem", gap: "1rem", justifyContent: "center" }}>
        <Select defaultValue={cryptoCurrencies[0].value} options={cryptoCurrencies} onChange={handleFromCurrencyChange} />{" "}
        <Select defaultValue={fiatCurrencies[0].value} options={fiatCurrencies} onChange={handleToCurrencyChange} />
      </section>
      <section style={{ marginTop: "1rem" }}>
        {isLoading ? (
          <Spin tip="Fetching results" size="large" style={{ display: "flex", justifyContent: "center" }} />
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "1rem" }}>
            <ExchangeRateUI
              price={data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]}
              dataObj={dependencies}
              currencySymbol={currencySymbol}
            />
          </div>
        )}
      </section>
    </section>
  );
};
