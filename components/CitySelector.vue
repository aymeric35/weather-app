<script setup lang="ts">
const emit = defineEmits(['update:city', 'onSubmit'])

const cities = [
  { id: 1, name: 'Paris' },
  { id: 2, name: 'Berlin' },
  { id: 3, name: 'Tokyo' },
  { id: 4, name: 'New York' },
  { id: 5, name: 'Sydney' },
  { id: 6, name: 'Madrid' },
]

const selected = ref('')
const query = ref('')

const exists = (): boolean => {
  return cities.some(city => city.name === query.value)
}

const queryCity = computed(() => {
  if (!exists()) {
    return query.value === '' ? null : { id: null, name: query.value }
  }
})

const filteredCities = computed(() =>
  query.value === ''
    ? cities
    : cities.filter(city =>
      city.name
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.value.toLowerCase().replace(/\s+/g, '')),
    ),
)

const submitCity = (query: string): void => {
  if (!exists()) {
    cities.push({ id: cities[cities.length - 1].id + 1, name: query })
  }
  emit('onSubmit')
}
</script>

<template>
  <HeadlessCombobox v-model="selected">
    <div class="box">
      <div class="box__input-group">
        <HeadlessComboboxButton class="box__input-button">
          <Icon name="lucide:search-large" size="36" />
        </HeadlessComboboxButton>
        <HeadlessComboboxInput
          class="box__input"
          @change="query = $event.target.value"
          @input="$emit('update:city', $event.target.value)"
          @keypress.enter="submitCity(query)"
        />
      </div>
      <HeadlessComboboxOptions class="box__options">
        <HeadlessComboboxOption v-if="queryCity" :value="queryCity.name">
          Create "{{ query }}"
        </HeadlessComboboxOption>
        <HeadlessComboboxOption
          v-for="city in filteredCities"
          :key="city.id"
          :value="city.name"
        >
          {{ city.name }}
        </HeadlessComboboxOption>
      </HeadlessComboboxOptions>
    </div>
  </HeadlessCombobox>
</template>

<style lang="scss" scoped>
.box {
  position: relative;
  margin-top: 5rem;
  margin-left: 5rem;

  &__input-group {
    position: relative;
    width: 100%;
    border: 0.2rem solid rgba($neutral-50, 0.25);
    border-radius: 0.5rem;
  }

  &__input {
    width: 100%;
    padding-left: 3rem;
    background: none;
    border: none;
  }

  &__input-button {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
  }

  &__options {
    width: 100%;
    color: $neutral-900;
    background-color: white;
  }
}
</style>
