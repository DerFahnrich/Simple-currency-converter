export interface IConverterSliceState {

  currentRates?: IRates;
  currencies?: ICurrencies;
  fromCurrency: ICurrency | null;
  toCurrency: ICurrency | null;
}

export interface ICurrencies extends IIndexable {
  CNY: string;
  DKK: string;
  EUR: string;
  GBP: string;
  NOK: string;
  SEK: string;
  USD: string;
}

export type ICurrency = {
  iso: string;
  text: string;
};

export interface IFlags extends IIndexable {
  CNY: string;
  DKK: string;
  EUR: string;
  GBP: string;
  NOK: string;
  SEK: string;
  USD: string;
}

interface IIndexable {
  [key: string]: any;
}

export interface ILatest {
  base: string;
  rates: IRates;
  timestamp: number;
}

export interface IRates extends IIndexable {
  CNY: number;
  DKK: number;
  EUR: number;
  GBP: number;
  NOK: number;
  SEK: number;
  USD: number;
}
