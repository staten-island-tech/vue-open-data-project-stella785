<template>
    <div>
      <button>
        <router-link to="/">Home Page</router-link>
      </button>
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
            text: 'Total SHSAT Acceptance Rate'
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
      
      const counts = {}
      data.forEach(school => {
        const key = school.count_of_testers
        if (counts[key] === undefined) {
          counts[key] = 0
        }
        counts[key] += school.count_of_testers
      })
      const labels = []
      const values = []
       for (const key in counts) {
        labels.push(key)
        values.push(counts[key])
      }
      this.chartData = {
        labels: labels,
        datasets: [
          {
            label: 'Number of Offers',
            data: values,
            backgroundColor: [
              '#FF6384',
            ]
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
button {
    margin: 20px;
    padding: 20px;
}
</style>