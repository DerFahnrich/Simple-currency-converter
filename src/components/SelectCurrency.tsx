import { Autocomplete, TextField } from "@mui/material";
import { HTMLAttributes, ReactElement } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { selectCurrencies } from "../store/converterSlice";
import { convertCurrenciesToOptionsArray } from "../utils";
import { ICurrency } from "../interfaces";
import { Currency } from ".";

interface ISelectCurrencyProps {
  currency: ICurrency | null;
  className?: string;
  label: string;
  setCurrency: (newValue: ICurrency | null) => void;
}

export function SelectCurrency(props: ISelectCurrencyProps): ReactElement {
  const currencies = useAppSelector(selectCurrencies);
  const filteredCurrencies = currencies ? convertCurrenciesToOptionsArray(currencies) : currencies;

  if (!filteredCurrencies) {
    return <div>Loading..</div>;
  }

  const isOptionEqualToValue = (option: ICurrency, value: ICurrency) => {
    const isoIsEqual = option.iso === value.iso;
    const textIsEqual = option.text === value.text;
    return isoIsEqual && textIsEqual;
  };

  const renderOption = (props: HTMLAttributes<HTMLLIElement>, option: ICurrency) => (
    <li {...props} key={option.iso}>
      <Currency currency={option} />
    </li>
  );

  return (
    <Autocomplete<ICurrency, false, false, false>
      className={props.className}
      getOptionLabel={(option) => option.text}
      isOptionEqualToValue={isOptionEqualToValue}
      onChange={(_, newValue) => props.setCurrency(newValue)}
      options={filteredCurrencies}
      renderInput={(params) => <TextField {...params} label={props.label} />}
      renderOption={renderOption}
      value={props.currency}
    />
  );
}
