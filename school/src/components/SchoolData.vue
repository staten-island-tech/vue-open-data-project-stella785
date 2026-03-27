<template>
    <div>
        <h1>{{ school.feeder_school_name }}</h1>
        <h2>Year: {{ school.year }}</h2>
        <h2>Number of testers: {{ school.count_of_testers }}</h2>
        <h3>Number of offers: {{ school.number_of_offers }}</h3>
        <h3>Number of Discovery participants: {{ school.number_of_discovery_participants }}</h3>
        <router-link to="/">Exit</router-link>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const school = ref({})
async function getSchool(name) {
    const response = await fetch(`https://data.cityofnewyork.us/resource/k8ah-28f4.json?feeder_school_name=${encodeURIComponent(name)}`)
    const data = await response.json()
    school.value = data[0]
}
onMounted(() => {
    getSchool(route.params.feeder_school_name)
})
watch(
    () => route.params.feeder_school_name,
    function(name) {
        getSchool(name)
    }
)
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