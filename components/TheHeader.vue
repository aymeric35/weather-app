<script setup lang="ts">

</script>

<template>
  <header>
    <h1>WEATHER</h1>
    <div>
      <CityDisplayer />
      <CitySelectorWrapper />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  h1 + div {
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
    align-items: center;
  }
}
</style>
