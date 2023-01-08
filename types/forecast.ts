declare interface Forecast {
  cod: string
  message: number
  cnt: number
  list: ForecastData[]
  city: City
}

interface City {
  id: number
  name: string
  coord: Coord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

interface Coord {
  lat: number
  lon: number
}

declare interface ForecastData {
  dt: number
  main: MainClass
  weather: Weather[]
  clouds: Clouds
  wind: Wind
  visibility: number
  pop: number
  sys: Sys
  dt_txt: Date
  rain?: Rain
}

interface Clouds {
  all: number
}

interface MainClass {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

interface Rain {
  '3h': number
}

interface Sys {
  pod: Pod
}

enum Pod {
  D = 'd',
  N = 'n',
}

interface Weather {
  id: number
  main: MainEnum
  description: Description
  icon: Icon
}

enum Description {
  BrokenClouds = 'broken clouds',
  FewClouds = 'few clouds',
  LightRain = 'light rain',
  ModerateRain = 'moderate rain',
  OvercastClouds = 'overcast clouds',
  ScatteredClouds = 'scattered clouds',
}

enum Icon {
  The02N = '02n',
  The03N = '03n',
  The04D = '04d',
  The04N = '04n',
  The10D = '10d',
  The10N = '10n',
}

enum MainEnum {
  Clouds = 'Clouds',
  Rain = 'Rain',
}

interface Wind {
  speed: number
  deg: number
  gust: number
}
