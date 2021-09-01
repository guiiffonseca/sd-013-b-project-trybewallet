export async function getCurrency() {
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';

  return fetch(endpoint)
    .then((response) => response.json())
    .then((response) => response);
}

export async function func() {
  return 'a';
}
