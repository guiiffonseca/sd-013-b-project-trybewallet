const API = 'https://economia.awesomeapi.com.br/json/all';

export default function fetchTaxas() {
  return fetch(API)
    .then((response) => response.json())
    .then((moedas) => moedas);
}
