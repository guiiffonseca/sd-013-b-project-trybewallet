const GambiraMp4 = ({ atualField, currency }) => {
  if (currency === 'USD') {
    return '55.75';
  } if (currency === 'EUR') {
    return '131.37';
  }
  return atualField;
};

export default GambiraMp4;
