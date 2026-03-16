<template>
    <router-link :to="schoolpath" class="card">
        <h2>{{  }}</h2>
        <h3>{{  }}</h3>
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

</script>

<style scoped>

</style>