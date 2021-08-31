export default async function getMoedas() {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');

  const Moedas = await response.json();

  return Moedas;
}
