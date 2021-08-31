const API_URL = 'https://economia.awesomeapi.com.br/json/all';

const requestAPI = async () => {
  const result = await fetch(API_URL);
  return result.json();
};

export default requestAPI;
