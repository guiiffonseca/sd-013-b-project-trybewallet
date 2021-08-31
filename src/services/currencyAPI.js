const API_ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = () => (
  fetch(API_ENDPOINT)
    .then((response) => (response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))))
);

export default getCurrencies;
