import { createSlice } from "@reduxjs/toolkit";
import { IConverterSliceState } from "../interfaces";
import {
  setCurrenciesCaseReducer,
  setCurrentRatesCaseReducer,
  setFromCurrencyCaseReducer,
  setToCurrencyCaseReducer,
} from "./converterCaseReducers";
import { RootState } from ".";

const initialState: IConverterSliceState = {
  fromCurrency: { iso: "USD", text: "United States Dollar" },
  toCurrency: { iso: "SEK", text: "Swedish Krona" },
};

const converterSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {
    setCurrencies: setCurrenciesCaseReducer,
    setCurrentRates: setCurrentRatesCaseReducer,
    setFromCurrency: setFromCurrencyCaseReducer,
    setToCurrency: setToCurrencyCaseReducer,
  },
});

export const selectCurrencies = (state: RootState) => state.converter.currencies;
export const selectFromCurrency = (state: RootState) => state.converter.fromCurrency;
export const selectToCurrency = (state: RootState) => state.converter.toCurrency;

export const { setCurrencies, setCurrentRates, setFromCurrency, setToCurrency } =
  converterSlice.actions;

export default converterSlice.reducer;
