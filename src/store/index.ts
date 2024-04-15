import { configureStore } from "@reduxjs/toolkit";
import converterSlice from "./converterSlice";

export const store = configureStore({
  reducer: {
    converter: converterSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
