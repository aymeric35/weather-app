import addSearchParams from '~/utils/addSearchParams'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const api = {
    base: 'https://api.openweathermap.org/data/2.5/weather',
    key: config.public.apiSecret,
    unit: 'metric',
  }
  const query = { q: event.context.params.city.toLowerCase(), units: api.unit, appid: api.key }
  const res = await fetch(addSearchParams(new URL(api.base), query))
  const data = await res.json()
  if (data.cod === '404') {
    return Promise.reject(data)
  }
  return data
})
