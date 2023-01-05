<script setup lang="ts">
const city = useWeather()
const isLoading = useLoadingState()

const cityName = computed(() => {
  const exclusionList = ['Arrondissement de']
  if (city.value) {
    const excludedString = exclusionList.filter(s => city.value?.name.includes(s))
    return excludedString.length !== 0
      ? city.value.name.replace(excludedString[0], '')
      : city.value.name
  }
})
</script>

<template>
  <div class="city">
    <Icon name="lucide:map-pin" />
    <span v-if="isLoading" class="loader" />
    <h2 v-else-if="city">
      {{ cityName }}
    </h2>
    <h2 v-else>
      Please search a city
    </h2>
  </div>
</template>

<style lang="scss" scoped>
.city {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.5rem;

  span {
    margin-left: 2rem;
  }

  .loader {
    position: relative;
    width: 0.8rem;
    height: 0.8rem;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 1.6rem 0 #fff, -1.6rem 0 #fff;
    animation: flash 0.5s ease-out infinite alternate;
  }

  @keyframes flash {
    0% {
      background-color: #FFF2;
      box-shadow: 1.6rem 0 #FFF2, -1.6rem 0 #FFF;
    }

    50% {
      background-color: #FFF;
      box-shadow: 1.6rem 0 #FFF2, -1.6rem 0 #FFF2;
    }

    100% {
      background-color: #FFF2;
      box-shadow: 1.6rem 0 #FFF, -1.6rem 0 #FFF2;
    }
  }
}
</style>
