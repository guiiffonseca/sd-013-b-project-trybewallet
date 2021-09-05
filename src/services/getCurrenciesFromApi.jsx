const getCurrenciesFromApi = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  const arrayWithEntries = Object.entries(result);
  return arrayWithEntries;
};

export default getCurrenciesFromApi;
