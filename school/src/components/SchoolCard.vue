<template>
    <router-link :to="schoolPath" class="card">
        <h2>{{ school.feeder_school_name }}</h2>
        <h3>Number of offers: {{ school.number_of_offers }}</h3>
    </router-link>
</template>

<script setup>
import {computed} from 'vue'
const props = defineProps({
    school:{
        type: Object,
        required: true,
    },

})
const schoolPath = computed (() => {
    return `/school/${props.school.feeder_school_name}`
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caudex:ital,wght@0,400;0,700;1,400;1,700&display=swap');
.card {
    width: 33%;
    height: 300px;
    background-color: #aa9fb1;
    font-family: "Caudex", serif;
    font-weight: 400;
    font-style: normal;
    padding: 10px;
    margin: 10px;
}
h2 {
    color: #000000;
}
h3 {
    color: #363946;
}
</style>