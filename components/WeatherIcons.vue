<script setup lang="ts">
const props = defineProps({
    iconName: {
        required: true,
        default: ''
    }
})

const dynamicComponent = computed(() => {
        const name = props.iconName
        return defineAsyncComponent(() => import( /* @vite-ignore */ `../assets/icons/filled/${name}.svg?component`))
})
</script>

<template>
    <component :is="dynamicComponent" />
</template>