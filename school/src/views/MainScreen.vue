<template>
    <div class="container">
        <SchoolCard/>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import SchoolCard from '@/components/SchoolCard.vue';
const school = ref([])
async function getSchool() {
    try {
        const response = await fetch('https://data.cityofnewyork.us/resource/k8ah-28f4.json')
        const data = await response.json()
    } catch (error) {
        console.log(error)
    }
}
onMounted(() => {
    getSchool()
})
</script>

<style scoped>

</style>