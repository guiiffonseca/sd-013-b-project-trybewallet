// Api de Moedas

const apideMoedas = async () => {
  const TAMANHOMOEDAS = 3;
  const moedasApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await moedasApi.json();
  return Object.keys(response).filter((elemento) => elemento.length === TAMANHOMOEDAS);
};

export default apideMoedas;
