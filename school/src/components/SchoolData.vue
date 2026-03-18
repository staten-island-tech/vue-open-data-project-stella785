<template>
    <div>
        <h2>{{ school.feeder_school_name }}</h2>
        <h3>{{ school.number_of_offers }}</h3>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const school = ref({})
async function getSchool(name) {
    const response = await fetch(`https://data.cityofnewyork.us/resource/k8ah-28f4.json?feeder_school_name=${name}`)
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

</style>