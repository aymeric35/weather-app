export const useWeather = () => useState<Weather | undefined>('weather', () => undefined)
export const useCity = () => useState<string>('city', () => '')
export const useWeatherErrorHandling = () => useState<getWeather404 | undefined>('weatherErrorHandling', () => ({
  cod: '',
  message: '',
}))
export const useLoadingState = () => useState<boolean>('isLoading', () => false)
