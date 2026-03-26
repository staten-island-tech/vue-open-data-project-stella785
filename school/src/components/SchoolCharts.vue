<template>
    <div>
        <Bar
            v-if="chartData"
            :data="chartData"
            :options="chartOptions"
        />
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: null,
      chartOptions: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: {
            display: true,
            text: 'Top 10 SHSAT Offers by School'
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

      const sorted = data
        .filter(item => item.number_of_offers)
        .sort((a, b) => Number(b.number_of_offers) - Number(a.number_of_offers))
        .slice(0, 10)

      this.chartData = {
        labels: sorted.map(item => item.feeder_school_name),
        datasets: [
          {
            label: 'Number of Acceptance',
            backgroundColor: '#aa9fb1',
            data: sorted.map(item => Number(item.number_of_offers))
          }
        ]
      }
    } catch (error) {
      console.error(error)
    }
  }
}

</script>

<style scoped>

</style>