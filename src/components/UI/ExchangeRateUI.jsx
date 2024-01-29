import { Typography, Card } from "antd";
import propTypes from "prop-types";

export const ExchangeRateUI = props => {
  const { price, dataObj, currencySymbol } = props;
  const toCurrency = dataObj.toCurrency;
  let value = Number(price);
  let currencyCode = toCurrency;

  let currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode
  });

  let formattedCurrency = currency.format(value);

  return (
    <div className="exchange-rate-ui">
      <Card extra={currencySymbol} bordered={false} style={{ width: 300, backgroundColor: "#4d4add", color: "#fff" }} size="default">
        <Typography.Paragraph style={{ color: "#fff" }}>{formattedCurrency}</Typography.Paragraph>
      </Card>
    </div>
  );
};

ExchangeRateUI.propTypes = {
  price: propTypes.string.isRequired,
  dataObj: propTypes.object.isRequired,
  currencySymbol: propTypes.string.isRequired
};
