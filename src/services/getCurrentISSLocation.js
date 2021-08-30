const WALLET_API = 'https://economia.awesomeapi.com.br/json/';

// export const getCurrentISSLocation = () => (
//   fetch(`${WALLET_API}/all`)
//     .then((response) => (
//       response
//         .json()
//         .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
//     ))
// );

export const getCurrentISSLocation = async () => {
  const response = await fetch(`${WALLET_API}/all`);
  const translated = await response.json();
  return response.ok
    ? Promise.resolve(translated)
    : Promise.reject(translated);
};

export const TWO_SECONDS = 2000;
