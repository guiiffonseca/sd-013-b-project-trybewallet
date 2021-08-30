const URL_API = 'aqui';

const fetchAPI = (search) => {
  fetch(`${URL_API}${search}`)
    .then((response) => (
      response
        .json()
        .then((data) > (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ));
};

export default fetchAPI;
