import { Autocomplete, TextField } from "@mui/material";
import { HTMLAttributes, ReactElement } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { selectCurrencies } from "../store/converterSlice";
import { convertCurrenciesToCurrencyArray } from "../utils";
import { ICurrency } from "../interfaces";
import { Currency } from ".";

interface ISelectCurrencyProps {
  currency: ICurrency;
  className?: string;
  label: string;
  setCurrency: (newValue: ICurrency) => void;
}

export function SelectCurrency(props: ISelectCurrencyProps): ReactElement {
  const currencies = useAppSelector(selectCurrencies);
  const filteredCurrencies = currencies ? convertCurrenciesToCurrencyArray(currencies) : undefined;

  if (!filteredCurrencies) {
    return <TextField className={props.className} disabled placeholder="Loading.." />;
  }

  const isOptionEqualToValue = (option: ICurrency, value: ICurrency) => {
    const isoIsEqual = option.iso === value.iso;
    const textIsEqual = option.value === value.value;
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
      getOptionLabel={(option) => option.value as string}
      isOptionEqualToValue={isOptionEqualToValue}
      onChange={(_, newValue) => props.setCurrency(newValue!)}
      options={filteredCurrencies}
      renderInput={(params) => <TextField {...params} label={props.label} />}
      renderOption={renderOption}
      value={props.currency}
    />
  );
}
