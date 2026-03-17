<template>
    <router-link :to="schoolpath" class="card">
        <h2>{{ feeder_school_name }}</h2>
        <h3>{{ number_of_offers }}</h3>
    </router-link>
</template>

<script setup>
import {computed} from 'vue'
const props = defineProps({
    school:{
        type: String,
        required: true,
    },

})
const schoolPath = computed (() => {
    return `/school/${props.school.feeder_school_name}`
})
</script>

<style scoped>

</style>