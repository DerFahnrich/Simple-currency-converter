import { PayloadAction } from "@reduxjs/toolkit";
import { IConverterSliceState, ICurrencies, ICurrency, ILatest } from "../interfaces";

export const setCurrenciesCaseReducer = (
  state: IConverterSliceState,
  action: PayloadAction<ICurrencies>
) => {
  state.currencies = action.payload;
};

export const setFromCurrencyCaseReducer = (
  state: IConverterSliceState,
  action: PayloadAction<ICurrency | null>
) => {
  state.fromCurrency = action.payload;
};

export const setLatestCaseReducer = (
  state: IConverterSliceState,
  action: PayloadAction<ILatest>
) => {
  state.latest = action.payload;
  state.currentRates = action.payload.rates;
};

export const setToCurrencyCaseReducer = (
  state: IConverterSliceState,
  action: PayloadAction<ICurrency | null>
) => {
  state.toCurrency = action.payload;
};
