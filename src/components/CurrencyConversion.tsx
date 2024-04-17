import "./CurrencyConversion.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ChangeEventHandler, ReactElement, useState } from "react";
import { ConvertInput } from ".";
import { useAppSelector, useConvert } from "../hooks";
import { selectFromCurrency, selectToCurrency } from "../store/converterSlice";

export function CurrencyConversion(): ReactElement {
  const fromCurrency = useAppSelector(selectFromCurrency);
  const toCurrency = useAppSelector(selectToCurrency);
  const [fromValue, setFromValue] = useState("1");
  const { convertedValue } = useConvert(fromValue);

  const handleFromValueChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const inputRegex = /^[0-9.]*$/; // Regex to allow numbers and a single period
    const newValue = e.target.value;

    if (!fromCurrency || !toCurrency) return;

    if (inputRegex.test(newValue)) {
      setFromValue(newValue);
    }
  };

  return (
    <div className="converter-wrapper">
      <ConvertInput
        focus
        iso={fromCurrency?.iso}
        onChange={handleFromValueChange}
        value={fromValue}
      />
      <ArrowForwardIcon className="arrow" color="primary" fontSize="large" />
      <ConvertInput disabled iso={toCurrency?.iso} value={convertedValue} />
    </div>
  );
}
