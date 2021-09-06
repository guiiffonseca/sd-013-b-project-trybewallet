export async function fetchCurrency() {
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';

  return fetch(endpoint)
    .then((response) => response.json())
    .then((response) => response);
}

export const x = () => {
  // const endpoint = 'https://economia.awesomeapi.com.br/json/all';

  // fetch(endpoint)
  //   .then((response) => (
  //     response
  //       .json()
  //       .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  //   ));
};
