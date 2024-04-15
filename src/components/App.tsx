import { ReactElement, useEffect } from "react";
import { BaseCurrency, Header } from ".";
import { Container } from "@mui/material";
import { useFetch } from "../hooks/useFetch";
import { ILatest, IRateNames } from "../interfaces";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setRateNames } from "../store/converterSlice";

export function App(): ReactElement {
  const dispatch = useAppDispatch();

  const [_, { data: latest }] = useFetch<ILatest>("/latest.json", { immediate: true });

  const [__, { data: rateNames }] = useFetch<IRateNames>("/currencies.json", {
    immediate: true,
  });

  useEffect(() => {
    if (rateNames) {
      dispatch(setRateNames(rateNames));
    }
  }, [rateNames]);

  useEffect(() => {
    if (latest) {
      console.log(latest);
    }
  }, [latest]);

  return (
    <Container>
      <Header />
      <BaseCurrency />
    </Container>
  );
}
