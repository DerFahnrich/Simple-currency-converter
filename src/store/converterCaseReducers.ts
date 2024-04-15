import { PayloadAction } from "@reduxjs/toolkit";
import { IConverterSliceState, IRateNames } from "../interfaces";

export const setRateNamesCaseReducer = (state: IConverterSliceState, action: PayloadAction<IRateNames>) => {
  state.rateNames = action.payload;
};
