<script lang="ts" setup>
import { getWeatherByCity } from '~/services/weather'

const city = ref('')
const errorHandling = ref<getWeather404 | undefined>({
  cod: '',
  message: '',
})
const isLoading = ref<boolean>(false)
const weather = ref<Weather | undefined >()
const regionNames = new Intl.DisplayNames(['en'], { type: 'region' })

const clear = () => {
  weather.value = undefined
  errorHandling.value = undefined
}

interface getWeather404 {
  cod: string
  message: string
}

async function getWeather(city: string) {
  clear()
  try {
    isLoading.value = true
    await delay(500)
    weather.value = await getWeatherByCity(city)
  }
  catch (err: any) {
    errorHandling.value = err
    return err
  }
  finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div>
    <div class="input-search">
      <input v-model="city" type="text" placeholder="Search a city" @keypress.enter="getWeather(city)">
      <button label="Search" @click="getWeather(city)">
        Search
      </button>
    </div>
    <div v-if="isLoading">
      <p>...loading</p>
    </div>
    <div v-if="weather">
      <h1>{{ weather.name }}</h1>
      <h2>{{ regionNames.of(weather.sys.country) }}</h2>
      <p>{{ weather.main.feels_like }} ˚C</p>
      <p>{{ weather.main.humidity }}%</p>
      <p>{{ weather.main.pressure }} hectopascals</p>
      <p>{{ weather.main.temp }} ˚C</p>
      <p>{{ weather.main.temp_max }} ˚C</p>
      <p>{{ weather.main.temp_min }} ˚C</p>
    </div>
    <div v-if="errorHandling" class="error">
      {{ errorHandling.message }}
    </div>
  </div>
  <div v-if="weather">
    <WeatherWidget :temperature="weather.main.temp" :weather-icon="weather.weather[0].icon" />
  </div>
</template>
