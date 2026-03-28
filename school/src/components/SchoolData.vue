<template>
    <div>
        <Pie v-if="loaded" :data="chartData" :options="chartOptions" />
        <h1>{{ school.feeder_school_name }}</h1>
        <h2>Year: {{ school.year }}</h2>
        <h2>Number of testers: {{ school.count_of_testers }}</h2>
        <h3>Number of offers: {{ school.number_of_offers }}</h3>
        <h3>Number of Discovery participants: {{ school.number_of_discovery_participants }}</h3>
        <router-link to="/">Exit</router-link>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: 'SchoolData',
    components: { Pie },
    data() {
    return {
        loaded: false,
        school: {},
        chartData: null,
        chartOptions: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: {
            display: true,
            text: 'Testers vs Accepted'
          }
        }
        }
    }
  },
  async mounted() {
    const route = useRoute()
    const name = route.params.feeder_school_name

    try {
    const response = await fetch(`https://data.cityofnewyork.us/resource/k8ah-28f4.json?feeder_school_name=${encodeURIComponent(name)}`)
    const data = await response.json()
    this.school = data[0]

    let testers = Number(this.school.count_of_testers)
    let offers = Number(this.school.number_of_offers)

    if (!testers) {
        testers = 0
    }
    if (!offers) {
        offers = 0
    }

    this.chartData = {
    labels: ['Accepted', 'Not Accepted'],
    datasets: [
        {
        label: 'Students',
        data: [offers, testers - offers],
        backgroundColor: ['#FF6384', '#66BB6A']
        }
    ]
    }
    this.loaded = true
    } catch (error) {
    console.error(error)
    }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caudex:ital,wght@0,400;0,700;1,400;1,700&display=swap');
div {
    background-color: #aa9fb1;
    font-family: "Caudex", serif;
    font-weight: 400;
    font-style: normal;
    padding: 10px;
    margin: 10px;
}
</style>