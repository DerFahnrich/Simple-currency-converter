export interface IConverterSliceState {
  currentRates?: ICurrencies;
  currencies?: ICurrencies;
  fromCurrency: ICurrency;
  latest?: ILatest;
  toCurrency: ICurrency;
}

export interface ICurrencies extends IIndexable {
  CNY: string | number;
  DKK: string | number;
  EUR: string | number;
  GBP: string | number;
  NOK: string | number;
  SEK: string | number;
  USD: string | number;
}

export type ICurrency = {
  iso: string;
  value: string | number;
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
  rates: ICurrencies;
  timestamp: number;
}
