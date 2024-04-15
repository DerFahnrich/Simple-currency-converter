import { createSlice } from "@reduxjs/toolkit";
import { IConverterSliceState } from "../interfaces";
import { setRateNamesCaseReducer } from "./converterCaseReducers";
import { RootState } from ".";
import { USD } from "../constants";

const initialState: IConverterSliceState = {
  baseCurrency: USD,
};

const converterSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {
    setRateNames: setRateNamesCaseReducer,
  },
});

export const selectBaseCurrency = (state: RootState) => state.converter.baseCurrency;
export const selectRateNames = (state: RootState) => state.converter.rateNames;
export const { setRateNames } = converterSlice.actions;
export default converterSlice.reducer;
