<template>
    <div>
        <Bar
            id=""
            :options="chartOptions"
            :data="chartData"
        />
    </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'


</script>

<style scoped>

</style>