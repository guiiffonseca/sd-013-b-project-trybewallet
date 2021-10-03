async function getMoedas() {
  try {
    const fetchMoedas = await fetch('https://economia.awesomeapi.com.br/json/all');
    const moedas = await fetchMoedas.json();
    const api = Object.keys(moedas);
    return api;
  } catch (error) {
    return (error);
  }
}
export default getMoedas;

export async function getDespesas() {
  try {
    const fetchDespesas = await fetch('https://economia.awesomeapi.com.br/json/all');
    const moedas = await fetchDespesas.json();
    return moedas;
  } catch (error) {
    return (error);
  }
}
