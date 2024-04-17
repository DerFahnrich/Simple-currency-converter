import "./CurrentExchangeRate.css";
import { ReactElement } from "react";
import { ICurrency } from "../interfaces";
import { Currency } from ".";

interface ICurrentExchangeRateProps {
  currencyRate: ICurrency;
}

export function CurrentExchangeRate({ currencyRate }: ICurrentExchangeRateProps): ReactElement {
  return (
    <div className="currency-exchange-rate">
      <Currency currency={currencyRate} />
      <p className="iso">{currencyRate.iso}</p>
      <p className="rate">{currencyRate.value}</p>
    </div>
  );
}
