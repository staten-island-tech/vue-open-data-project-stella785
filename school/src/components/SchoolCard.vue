<template>
    <router-link :to="schoolPath" class="card">
        <h2>{{ school.feeder_school_name }}</h2>
        <h3>{{ school.number_of_offers }}</h3>
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

</style>