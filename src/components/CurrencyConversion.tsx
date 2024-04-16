import "./CurrencyConversion.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ReactElement } from "react";
import { ConvertInput } from ".";
import { useAppSelector } from "../hooks";
import { selectFromCurrency, selectToCurrency } from "../store/converterSlice";

export function CurrencyConversion(): ReactElement {
  const fromCurrency = useAppSelector(selectFromCurrency);
  const toCurrency = useAppSelector(selectToCurrency);

  return (
    <div className="converter-wrapper">
      <ConvertInput focus iso={fromCurrency?.iso} />
      <ArrowForwardIcon className="arrow" color="primary" fontSize="large" />
      <ConvertInput disabled iso={toCurrency?.iso} />
    </div>
  );
}
