import "./BaseCurrency.css";
import { ReactElement } from "react";
import { flags } from "../assets/flags";
import { useAppSelector } from "../hooks/useAppSelector";
import { selectBaseCurrency, selectRateNames } from "../store/converterSlice";

export function BaseCurrency(): ReactElement {
  const baseCurrency = useAppSelector(selectBaseCurrency);
  const rateNames = useAppSelector(selectRateNames);
  console.log(rateNames);
  return (
    <div className="base-currency">
      <h4>Base currency:</h4>
      <figure>
        <img alt={baseCurrency} src={flags[baseCurrency]} />
        <figcaption>{rateNames ? rateNames[baseCurrency] : "loading.."}</figcaption>
      </figure>
    </div>
  );
}
