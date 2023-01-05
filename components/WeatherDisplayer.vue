<script setup lang="ts">
const weather = useWeather()
const errorHandling = useWeatherErrorHandling()
const isLoading = useLoadingState()
</script>

<template>
  <section>
    <div v-if="isLoading" class="loader-container">
      <span class="loader" />
    </div>
    <div v-if="errorHandling" class="error">
      {{ errorHandling.message }}
    </div>
    <XyzTransition xyz="fade left">
      <div v-if="weather">
        <WeatherWidget :temperature="weather.main.temp" :weather-icon="weather.weather[0].icon" />
      </div>
    </XyzTransition>
  </section>
</template>

<style lang="scss" scoped>
section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40rem;
  margin-top: 2rem;
}

.loader-container {
  position: absolute;
  top:50%;
  left:50%;
  translate: -50% -50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
