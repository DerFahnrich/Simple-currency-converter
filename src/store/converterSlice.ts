import { createSlice } from "@reduxjs/toolkit";
import { IConverterSliceState } from "../interfaces";
import { RootState } from ".";

import {
  setCurrenciesCaseReducer,
  setFromCurrencyCaseReducer,
  setLatestCaseReducer,
  setToCurrencyCaseReducer,
} from "./converterCaseReducers";

const initialState: IConverterSliceState = {
  fromCurrency: { iso: "USD", value: "United States Dollar" },
  toCurrency: { iso: "SEK", value: "Swedish Krona" },
};

const converterSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {
    setCurrencies: setCurrenciesCaseReducer,
    // setCurrentRates: setCurrentRatesCaseReducer,
    setFromCurrency: setFromCurrencyCaseReducer,
    setLatest: setLatestCaseReducer,
    setToCurrency: setToCurrencyCaseReducer,
  },
});

export const selectCurrencies = (state: RootState) => state.converter.currencies;
export const selectCurrentRates = (state: RootState) => state.converter.currentRates;
export const selectFromCurrency = (state: RootState) => state.converter.fromCurrency;
export const selectLatest = (state: RootState) => state.converter.latest;
export const selectToCurrency = (state: RootState) => state.converter.toCurrency;

export const { setCurrencies, setFromCurrency, setLatest, setToCurrency } = converterSlice.actions;

export default converterSlice.reducer;
