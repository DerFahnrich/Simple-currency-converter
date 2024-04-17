import { useCallback, useEffect, useState } from "react";
import {
  selectCurrencies,
  selectCurrentRates,
  selectFromCurrency,
  selectToCurrency,
} from "../store/converterSlice";
import { useAppSelector } from "./useAppSelector";

interface IUseConvertReturnType {
  convertedValue: string;
}

export function useConvert(value: string): IUseConvertReturnType {
  const currentRates = useAppSelector(selectCurrentRates);
  const fromCurrency = useAppSelector(selectFromCurrency);
  const toCurrency = useAppSelector(selectToCurrency);
  const [convertedValue, setConvertedValue] = useState<string>("0");
  const valueAsNumber = parseFloat(value);

  const convert = useCallback((): void => {
    if (!currentRates) {
      setConvertedValue("0");
      return;
    }

    if (isNaN(valueAsNumber)) {
      setConvertedValue("0");
      return;
    }

    // Conversion, first convert to USD and then to the requested currency.
    const fromRateAgainstUSD = currentRates[fromCurrency?.iso];
    const fromValueInUSD = valueAsNumber / fromRateAgainstUSD;
    const toRateAgainstUSD = currentRates[toCurrency?.iso];
    const convertedValue = fromValueInUSD * toRateAgainstUSD;
    const roundedValue = convertedValue.toFixed(2);

    setConvertedValue(roundedValue);
  }, [currentRates, fromCurrency, toCurrency, valueAsNumber]);

  useEffect(() => {
    convert();
  }, [convert]);

  return { convertedValue };
}
