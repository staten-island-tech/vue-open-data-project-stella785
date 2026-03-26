<template>
    <div>
        <Pie v-if="chartData" :data="chartData" :options="chartOptions" />
    </div>
</template>

<script>
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

export default {
  name: 'PieChart',
  components: { Pie },
  data() {
    return {
      chartData: null,
      chartOptions: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: {
            display: true,
            text: 'SHSAT Offerings'
          }
        }
      }
    }
  },
  async mounted() {
    try {
      const response = await fetch(
        'https://data.cityofnewyork.us/resource/k8ah-28f4.json'
      )
      const data = await response.json()

      
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style scoped>

</style>