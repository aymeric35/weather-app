<script setup lang="ts">
import { useCity } from '~~/composables/states'
import { getWeatherByCity } from '~/services/weather'

const city = useCity()
const weather = useWeather()
const errorHandling = useWeatherErrorHandling()
const isLoading = useLoadingState()

const clear = () => {
  weather.value = undefined
  errorHandling.value = undefined
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
  <CitySelector v-model="city" @on-submit="getWeather(city)" />
</template>
