const fetchData = async (link) => {
  const require = await fetch(link);
  const data = await require.json();
  return data;
};

export default fetchData;
