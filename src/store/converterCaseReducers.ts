import { PayloadAction } from "@reduxjs/toolkit";
import { IConverterSliceState, ICurrencies, ICurrency, IRates } from "../interfaces";

export const setCurrentRatesCaseReducer = (
  state: IConverterSliceState,
  action: PayloadAction<IRates>
) => {
  state.currentRates = action.payload;
};

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

export const setToCurrencyCaseReducer = (
  state: IConverterSliceState,
  action: PayloadAction<ICurrency | null>
) => {
  state.toCurrency = action.payload;
};
