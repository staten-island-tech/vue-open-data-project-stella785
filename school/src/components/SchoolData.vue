<template>
    <div>
        <h2>{{ feeder_school_name }}</h2>
        <h2>{{ number_of_offers }}</h2>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const school = ref({})
async function getSchool(feeder_school_name) {
    const response = await fetch(``)
    const data = await response.json()
    school.value = data
}
onMounted(function(feeder_school_name) {
    getSchool(route.params.feeder_school_name)
})
watch(
    () => route.params.feeder_school_name,
    function(feeder_school_name) {
        getSchool(feeder_school_name)
    }
)
</script>

<style scoped>

</style>