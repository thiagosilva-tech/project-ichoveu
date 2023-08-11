// Remova os comentários a medida que for implementando as funções
const token = import.meta.env.VITE_TOKEN;
const API_BASE = 'http://api.weatherapi.com/v1/search.json?lang=pt&key=';
export const searchCities = async (term) => {
  //   seu código aqui
  const res = await fetch(`${API_BASE}${token}&q=${term}`);
  const data = await res.json();
  if (data.length > 0) {
    return data;
  }
  return window.alert('Nenhuma cidade encontrada');
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
