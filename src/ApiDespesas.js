const ApifetchDespesas = async () => {
  const link = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await link.json();
  return response;
};

export default ApifetchDespesas;
