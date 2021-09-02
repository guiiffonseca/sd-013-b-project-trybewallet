const fetchMoedas = async () => {
  let response = await fetch('https://economia.awesomeapi.com.br/json/all');
  response = await response.json();
  return response;
};

export default fetchMoedas;
