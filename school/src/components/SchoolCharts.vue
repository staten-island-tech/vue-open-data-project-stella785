<template>
    <div>
        <Bar
            v-if="chartData"
            :data="chartData"
            :options="chartOptions"
        />
    </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import {ref, onMounted} from 'vue'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
)

const chartData = ref(null)

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: {
      display: true,
      text: 'SHSAT Offers by School'
    }
  }
}
onMounted(async () => {
  const response = await fetch(
    'https://data.cityofnewyork.us/resource/k8ah-28f4.json'
  )
  const data = await response.json()
   const sorted = data
    .filter(item => item.number_of_offers)
    .sort((a, b) => Number(b.number_of_offers) - Number(a.number_of_offers))
    .slice(0, 10)

  chartData.value = {
    labels: sorted.map(item => item.feeder_school_name),
    datasets: [
      {
        label: 'SHSAT Offers',
        backgroundColor: '#42A5F5',
        data: sorted.map(item => Number(item.number_of_offers))
      }
    ]
  }
})
</script>

<style scoped>

</style>