const WALLET_API = 'https://economia.awesomeapi.com.br/json/all';

export const walletApi = async () => {
  const response = await fetch(`${WALLET_API}`);
  const translated = await response.json();
  return response.ok
    ? Promise.resolve(translated)
    : Promise.reject(translated);
};

export const TWO_SECONDS = 2000;
