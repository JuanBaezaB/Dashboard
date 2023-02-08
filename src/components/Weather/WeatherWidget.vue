<script setup>
import CurrentWeather from './CurrentWeather.vue';
import ForecastWeather from './ForecastWeather.vue';

</script>
<template>
    
    <div
        class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 bg-gradient-to-br dark:from-sky-400 dark:to-blue-700 from-yellow-400 to-pink-500 via-red-400">

        <CurrentWeather />
        <ForecastWeather />
    </div>


</template>

<script>
export default {
    data() {
        return {
        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>

