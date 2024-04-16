import "./BaseCurrency.css";
import { ReactElement } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { selectFromCurrency } from "../store/converterSlice";
import { Currency } from ".";

export function BaseCurrency(): ReactElement {
  const fromCurrency = useAppSelector(selectFromCurrency);

  if (!fromCurrency) {
    return <div>Loading..</div>;
  }

  return (
    <div className="base-currency">
      <h4>From currency:</h4>
      <Currency currency={fromCurrency} />
    </div>
  );
}
