<script setup lang="ts">
const props = defineProps({
    temperature: {
        required: true,
        default: 0
    },
    weatherIcon: {
        required: true,
        default: ''
    }
})

const separator: any = ref(null);

onMounted(() => {
    const c = separator.value;
    const dpi = window.devicePixelRatio;
    const ctx: CanvasRenderingContext2D = c.getContext('2d')

    c.setAttribute("height", c.clientHeight * dpi);
    c.setAttribute("width", c.clientWidth * dpi);
    ctx.scale(dpi, dpi)

    const grad = ctx.createLinearGradient(50, 50, 250, 100)
    grad.addColorStop(0, "rgba(255, 255, 255, 0.1)");
    grad.addColorStop(0.5, "rgba(255, 255, 255, 0.75)");
    grad.addColorStop(1, "rgba(255, 255, 255, 0.1)");
    ctx.strokeStyle = grad;
    ctx.beginPath();
    ctx.moveTo(0, 75);
    ctx.bezierCurveTo(150, 200, 150, -80, 270, 100);
    ctx.stroke();
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
    border-radius: 1.5rem;
    background: rgb(56, 189, 248);
    background: linear-gradient(180deg, rgba(56, 189, 248, 1) 0%, rgba(59, 130, 246, 1) 70%);
}

p {
    text-align: center;
    font-size: 4rem;
    color: #FAFAFA;
    margin: 0;
    margin-bottom: -15%;
    margin-top: 2.5rem;
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