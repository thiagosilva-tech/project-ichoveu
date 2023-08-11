// Remova os comentários a medida que for implementando as funções
const token = import.meta.env.VITE_TOKEN;
export const searchCities = (term) => {
  //   seu código aqui
  return fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`)
    .then((res) => res.json())
    .then((data) => (data.length > 0 ? data : window.alert('Nenhuma cidade encontrada')));
};

export const getWeatherByCity = async (cityURL) => {
//   seu código aqui
  return fetch(`http://api.weatherapi.com/v1/current.json?key=${token}&q=${cityURL}&aqi=no`)
    .then((res) => res.json())
    .then(({ current }) => {
      return {
        temp: current.temp_c,
        condition: current.condition.text,
        icon: current.condition.icon,
      };
    });
};
