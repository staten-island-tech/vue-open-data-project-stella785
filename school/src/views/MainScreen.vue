<template>
    <h1>SHSAT Acceptance Rates</h1>
    <SchoolCharts/>
    <SecondChart/>
    <div class="container">
        <SchoolCard v-for="(item, index) in school" :key="index" :school="item"/>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import SchoolCard from '../components/SchoolCard.vue';
import SchoolCharts from '../components/SchoolCharts.vue'
import SecondChart from '@/components/SecondChart.vue';
const school = ref([])
async function getSchool() {
    try {
        const response = await fetch('https://data.cityofnewyork.us/resource/k8ah-28f4.json')
        const data = await response.json()
        school.value = data
    } catch (error) {
        console.log(error)
    }
}
onMounted(() => {
    getSchool()
})
</script>

<style scoped>
h1 {
    text-align: center;
    margin: 0;
    background-color: #9f9fad;
    padding: 50px;
}
.container {
    background-color: #b7b3a1;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
</style>