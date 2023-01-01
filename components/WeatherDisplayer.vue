<script setup lang="ts">
const weather = useWeather()
const errorHandling = useWeatherErrorHandling()
const isLoading = useLoadingState()
const regionNames = new Intl.DisplayNames(['en'], { type: 'region' })
</script>

<template>
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
  <div v-if="weather">
    <WeatherWidget :temperature="weather.main.temp" :weather-icon="weather.weather[0].icon" />
  </div>
</template>
