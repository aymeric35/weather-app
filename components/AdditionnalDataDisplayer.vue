<script setup lang="ts">
const weather = useWeather()
const regionNames = new Intl.DisplayNames(['en'], { type: 'region' })
</script>

<template>
  <div class="container">
    <XyzTransition xyz="fade left">
      <div v-if="weather" class="data">
        <div>
          <Icon name="lucide:map-pin" />
          <h1>{{ weather.name }}</h1>
        </div>
        <div>
          <Icon name="lucide:flag" />
          <h2>{{ regionNames.of(weather.sys.country) }}</h2>
        </div>
        <div>
          <Icon name="lucide:wind" />
          <p>{{ weather.main.feels_like }} ˚C</p>
        </div>
        <div>
          <Icon name="wi:humidity" />
          <p>{{ weather.main.humidity }}%</p>
        </div>
        <div>
          <Icon name="wi:barometer" />
          <p>{{ weather.main.pressure }}</p>
        </div>
        <div>
          <Icon name="wi:celsius" />
          <p>{{ weather.main.temp }} ˚C</p>
        </div>
        <div>
          <Icon name="lucide:arrow-up" />
          <p>{{ weather.main.temp_max }} ˚C</p>
        </div>
        <div>
          <Icon name="lucide:arrow-down" />
          <p>{{ weather.main.temp_min }} ˚C</p>
        </div>
      </div>
    </XyzTransition>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
}

.data {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1rem;
  width: 80%;
  padding: 1rem 1rem 1rem 5rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  background-color: $sky-500;
  border-radius: 1rem;

  div {
    display: flex;
    gap: 0.5rem;
  }
}
</style>
