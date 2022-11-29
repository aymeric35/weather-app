<script lang="ts" setup>
const value = ref('');
const isLoading = ref(false)
let weather = ref<Weather | undefined>()
let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
const delay = (delayInms: number) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
}

async function getWeather(value: string) {
  weather.value = undefined;
  value = value.toLowerCase();
  try {
    isLoading.value = true;
    await delay(300);
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=81c72ec1a219ea59c2c74b56333ac7a8`)
    const data = await res.json()
    isLoading.value = false;
    if (data.cod === '404') return alert(data.message)
    console.log(data);
    weather.value = data;
  } catch (err) {
    return err;
  }
}


</script>

<template>
  <div>
    <div>
      <div class="p-inputgroup">
        <InputText @keypress.enter="getWeather(value)" type="text" v-model="value" placeholder="Search a city" />
        <Button @click="getWeather(value)" label="Search" />
      </div>
    </div>
    <div v-if="isLoading">
      <ProgressSpinner />
    </div>
    <div v-if="weather">
      <h1>{{ weather.name }}</h1>
      <h2>{{ regionNames.of(weather.sys.country) }}</h2>
      <!-- <p>{{ weather.main.feels_like }} ˚C</p>
      <p>{{ weather.main.humidity }}%</p>
      <p>{{ weather.main.pressure }} hectopascals</p>
      <p>{{ weather.main.temp }} ˚C</p>
      <p>{{ weather.main.temp_max }} ˚C</p>
      <p>{{ weather.main.temp_min }} ˚C</p> -->
    </div>
  </div>
  <div v-if="weather">
    <WeatherWidget :temperature="weather.main.temp" :weather-icon="weather.weather[0].icon"></WeatherWidget>
  </div>
</template>
