const apiFetchMoedas = async () => {
  const MAX_LENGTH = 3;
  const link = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await link.json();
  return Object.keys(response)
    .filter((moeda) => moeda.length === MAX_LENGTH);
};

export default apiFetchMoedas;
