export default async function fetchAPI() {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .catch((err) => console.log(err, 'error'));
}
