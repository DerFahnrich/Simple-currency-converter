import { ReactElement, useEffect } from "react";
import { Container } from "@mui/material";
import {
  Header,
  CurrencySelection,
  CurrencyConversion,
  CurrentExchangeRates,
  BaseCurrency,
} from ".";
import { ILatest, ICurrencies } from "../interfaces";
import { setCurrencies, setLatest } from "../store/converterSlice";
import { useAppDispatch, useFetch } from "../hooks";

export function App(): ReactElement {
  const dispatch = useAppDispatch();
  const [_, { data: latest }] = useFetch<ILatest>("/latest.json", { immediate: true });
  const [__, { data: rateNames }] = useFetch<ICurrencies>("/currencies.json", {
    immediate: true,
  });

  useEffect(() => {
    if (latest) dispatch(setLatest(latest));
    if (rateNames) dispatch(setCurrencies(rateNames));
  }, [latest, rateNames]);

  return (
    <Container>
      <Header />
      <BaseCurrency />
      <CurrencySelection />
      <CurrencyConversion />
      <CurrentExchangeRates />
    </Container>
  );
}
