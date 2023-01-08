import addSearchParams from '~/utils/addSearchParams'

const api = {
  base: 'https://api.openweathermap.org/data/2.5/forecast',
  key: import.meta.env.VITE_WEATHER_SECRET_KEY,
  unit: 'metric',
}

export const getForecastByCity = async (city: string) => {
  const query = { q: city.toLowerCase(), units: api.unit, appid: api.key }
  const res = await fetch(addSearchParams(new URL(api.base), query))
  const data = await res.json()
  if (data.cod === '404') {
    return Promise.reject(data)
  }
  return data
}
