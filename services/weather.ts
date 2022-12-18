import addSearchParams from '~/utils/addSearchParams'

const api = {
  base: 'https://api.openweathermap.org/data/2.5/weather',
  key: '51ce8228ff1227b1605fde80287ce123',
  unit: 'metric',
}

export const getWeatherByCity = async (city: string) => {
  const query = { q: city.toLowerCase(), units: api.unit, appid: api.key }
  const res = await fetch(addSearchParams(new URL(api.base), query))
  const data = await res.json()
  if (data.cod === '404') {
    return Promise.reject(data)
  }
  return data
}
