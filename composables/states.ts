// export const useWeather = () => useState<Weather | undefined>('weather', () => undefined)
export const useForecast = () => useState<Forecast | undefined>('forecast', () => undefined)
export const useCity = () => useState<string>('city', () => '')
export const useSelectedForecastDate = () => useState<number>('selectedForecastDate', () => Date.now())
export const useForecastDataByDate = () => useState<ForecastData | undefined>('forecastDataByDate', () => undefined)
export const useWeatherErrorHandling = () => useState<getWeather404 | undefined>('weatherErrorHandling', () => ({
  cod: '',
  message: '',
}))
export const useLoadingState = () => useState<boolean>('isLoading', () => false)
