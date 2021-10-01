// Api de Moedas

const apideMoedas = async () => {
  const moedasApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await moedasApi.json();
  return response;
};

export default apideMoedas;
