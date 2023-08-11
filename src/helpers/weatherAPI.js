// Remova os comentários a medida que for implementando as funções
const token = import.meta.env.VITE_TOKEN;
export const searchCities = (term) => {
  //   seu código aqui
  return fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`)
    .then((res) => res.json())
    .then((data) => {
      if (!data.some((city) => city.name.includes(term))) {
        throw new Error('Nenhuma cidade encontrada');
      }
      return data;
    });
};

export const getWeatherByCity = (cityURL) => {
//   seu código aqui
  return fetch(`http://api.weatherapi.com/v1/current.json?key=${token}&q=${cityURL}&aqi=no`)
    .then((res) => res.json())
    .then((data) => {
      return {
        name: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c, // temperatura em graus celsius
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
      };
    });
};

export const getPrevisao = (url) => {
  return fetch(`http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${token}&q=${url}&days=7`)
    .then((res) => res.json())
    .then(({ forecast }) => forecast);
};
