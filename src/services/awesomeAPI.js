const URL_API = 'https://economia.awesomeapi.com.br';

const getCurrenciesAPI = () => (
  fetch(`${URL_API}/json/all`)
    .then((response) => (response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getCurrenciesAPI;
