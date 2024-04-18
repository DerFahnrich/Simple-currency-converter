import "./CurrencySelection.css";
import { ReactElement } from "react";
import { SelectCurrency } from ".";
import { useAppDispatch, useAppSelector } from "../hooks";
import { ICurrency } from "../interfaces";

import {
  selectFromCurrency,
  selectToCurrency,
  setFromCurrency,
  setToCurrency,
} from "../store/converterSlice";

export function CurrencySelection(): ReactElement {
  const dispatch = useAppDispatch();
  const fromCurrency = useAppSelector(selectFromCurrency);
  const toCurrency = useAppSelector(selectToCurrency);

  const handleFromCurrencyUpdate = (newCurrency: ICurrency) => {
    dispatch(setFromCurrency(newCurrency));
  };

  const handleToCurrencyUpdate = (newCurrency: ICurrency) => {
    dispatch(setToCurrency(newCurrency));
  };

  return (
    <div className="select-currencies-wrapper">
      <SelectCurrency
        currency={fromCurrency}
        label="From Currency"
        setCurrency={handleFromCurrencyUpdate}
      />
      <SelectCurrency
        currency={toCurrency}
        className="to-currency"
        label="To Currency"
        setCurrency={handleToCurrencyUpdate}
      />
    </div>
  );
}
