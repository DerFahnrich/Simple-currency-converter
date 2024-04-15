export interface IConverterSliceState {
  baseCurrency: string;
  rateNames?: IRateNames;
}

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

interface IRates extends IIndexable {
  CNY: number;
  DKK: number;
  EUR: number;
  GBP: number;
  NOK: number;
  SEK: number;
  USD: number;
}

export interface IRateNames extends IIndexable {
  CNY: string;
  DKK: string;
  EUR: string;
  GBP: string;
  NOK: string;
  SEK: string;
  USD: string;
}
