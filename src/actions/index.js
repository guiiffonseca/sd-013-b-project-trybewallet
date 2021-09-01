export const logIn = (payload) => ({ type: 'LOG_IN', payload });

const attCurrencies = (payload) => ({ type: 'ATT_CURRENCIES', payload });

export function fetchCurrencies() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const objResponse = await response.json();
    let currenciesArray = [];
    const currencies = ['USD', 'CAD', 'EUR', 'GBP', 'ARS', 'BTC', 'LTC',
      'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP'];
    currencies.forEach((key) => {
      currenciesArray = [...currenciesArray, objResponse[key]];
    });
    return dispatch(attCurrencies(currenciesArray));
  };
}
