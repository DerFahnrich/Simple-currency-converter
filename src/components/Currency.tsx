import "./Currency.css";
import { ReactElement } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { selectCurrencies } from "../store/converterSlice";
import { flags } from "../assets/flags";
import { ICurrency } from "../interfaces";

interface ICurrencyProps {
  currency: ICurrency;
}

export function Currency({ currency }: ICurrencyProps): ReactElement {
  const currencies = useAppSelector(selectCurrencies);
  return (
    <figure className="currency">
      <img alt={currency.iso} src={flags[currency.iso]} />
      <figcaption>{currencies ? currencies[currency.iso] : "loading.."}</figcaption>
    </figure>
  );
}
