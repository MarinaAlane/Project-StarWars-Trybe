const fetchPlanets = async (url) => {
  const response = await fetch(url)
    .then((data) => data.json());
  return response.results;
};

export default fetchPlanets;
