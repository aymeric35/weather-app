<script setup lang="ts">
const props = defineProps({
  temperature: {
    required: true,
    default: 0,
  },
  weatherIcon: {
    required: true,
    default: '',
  },
})

const separator: any = ref(null)

onMounted(() => {
  const c = separator.value
  const dpi = window.devicePixelRatio
  const ctx: CanvasRenderingContext2D = c.getContext('2d')

  c.setAttribute('height', c.clientHeight * dpi)
  c.setAttribute('width', c.clientWidth * dpi)
  ctx.scale(dpi, dpi)

  const grad = ctx.createLinearGradient(50, 50, 250, 100)
  grad.addColorStop(0, 'rgba(255, 255, 255, 0.1)')
  grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.75)')
  grad.addColorStop(1, 'rgba(255, 255, 255, 0.1)')
  ctx.strokeStyle = grad
  ctx.beginPath()
  ctx.moveTo(0, 75)
  ctx.bezierCurveTo(150, 200, 150, -80, 270, 100)
  ctx.stroke()
})
</script>

<template>
  <section>
    <div class="card">
      <p>{{ props.temperature.toFixed(0) }}˚</p>
      <canvas ref="separator" />
      <div class="icon-container">
        <WeatherIcons :icon-name="props.weatherIcon" />
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: 2rem;
}

.card {
  width: 16rem;
  background: rgb(56 189 248);
  background: linear-gradient(180deg, rgb(56 189 248 / 100%) 0%, rgb(59 130 246 / 100%) 70%);
  border-radius: 1.5rem;
}

p {
  margin: 0;
  margin-top: 2.5rem;
  margin-bottom: -15%;
  font-size: 4rem;
  color: #FAFAFA;
  text-align: center;
}

canvas {
  width: 100%;
}

.icon-container {
  display: flex;
  justify-content: center;
  margin-top: -15%;
}
</style>
