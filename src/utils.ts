import { ICurrencies, ICurrency } from "./interfaces";

const chosenCurrencies: ICurrencies = {
  CNY: "Chinese Yuan",
  DKK: "Danish Krone",
  EUR: "Euro",
  GBP: "British Pound Sterling",
  NOK: "Norwegian Krone",
  SEK: "Swedish Krona",
  USD: "United States Dollar",
};

export function convertCurrenciesToCurrencyArray(currencies: ICurrencies): ICurrency[] {
  const nonRedundantCurrencies = removeRedundantCurrencies(currencies);
  const currenciesArray: ICurrency[] = [];

  for (const key in nonRedundantCurrencies) {
    currenciesArray.push({ iso: key, value: currencies[key] });
  }

  return currenciesArray;
}

function removeRedundantCurrencies(currencies: ICurrencies): ICurrencies {
  const nonRedundantCurrencies = {} as ICurrencies;

  for (const key in currencies) {
    if (chosenCurrencies.hasOwnProperty(key)) {
      nonRedundantCurrencies[key] = currencies[key];
    }
  }

  return nonRedundantCurrencies;
}
