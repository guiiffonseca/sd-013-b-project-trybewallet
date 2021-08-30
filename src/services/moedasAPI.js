const LINK_API = 'https://economia.awesomeapi.com.br/json/all';

export const getAPI = () => (
  fetch(LINK_API)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getAPI;
