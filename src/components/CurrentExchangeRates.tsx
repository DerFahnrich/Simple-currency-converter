import "./CurrentExchangeRates.css";
import { ReactElement } from "react";
import { useAppSelector } from "../hooks";
import { selectCurrentRates, selectLatest } from "../store/converterSlice";
import { convertCurrenciesToCurrencyArray } from "../utils";
import { CurrentExchangeRate } from ".";

export function CurrentExchangeRates(): ReactElement {
  const currentRates = useAppSelector(selectCurrentRates);
  const latest = useAppSelector(selectLatest);
  const timestamp = latest ? new Date(latest.timestamp * 1000).toLocaleDateString() : null;

  const currentRatesArray = currentRates
    ? convertCurrenciesToCurrencyArray(currentRates)
    : undefined;

  if (currentRatesArray === undefined) {
    return <div>Loading..</div>;
  }

  return (
    <div className="current-exchange-rates">
      <div className="exchange-info">
        <p className="description">Current exchange rates of popular currencies relative to USD</p>
        <p>Data from Open Exchange Rates API {timestamp}</p>
      </div>
      {currentRatesArray.map((currencyRate) => (
        <CurrentExchangeRate key={currencyRate.iso} currencyRate={currencyRate} />
      ))}
    </div>
  );
}
