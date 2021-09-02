const BASE_URL = 'https://economia.awesomeapi.com.br/json/all';

const fetchURL = () => (
  fetch(`${BASE_URL}`)
    .then((response) => (
      response
        .json()
        .then((object) => (
          response.ok ? Promise.resolve(object) : Promise.reject(object)
        ))
    ))
);

export default fetchURL;
