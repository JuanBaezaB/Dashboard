<script setup>
import axios from 'axios'
</script>
<template>
    <div
        class=" bg-gradient-to-br from-yellow-400 to-pink-500 via-red-400 w-full h-screen flex items-center justify-center">
        <Transition>
            <div v-if="show" class="bg-white p-8 bg-opacity-80 rounded-3xl flex space-x-12 items-center shadow-md">
                <div class=" flex flex-col justify-center items-center text-center ">
                    <div class="text-md font-bold flex flex-col text-gray-900"><span class="uppercase">Today</span>
                        <span class="font-normal text-gray-700 text-sm">July 29</span>
                    </div>
                    <div class="w-32 h-32 flex items-center justify-center">
                        <img :src="`src/assets/weather/fill/openweathermap/${info.weather[0].icon}.svg`" alt="">
                    </div>
                    <p class="text-gray-700 mb-2">{{ info.weather[0].description }}</p>
                    <div class="text-3xl font-bold text-gray-900 mb-6">32º</div>
                    <p class="text-gray-500 text-sm">Manhattan, NY Weather</p>

                </div>
                <div className="my-2 border-l-2 border-white p-2">
                    <p className="text-gray-700 text-md py-1">RealFeel: {{ Math.round(info.main.feels_like) }}&deg;C</p>
                    <p className="text-gray-700 text-md py-1">Humidity: {{ info.main.humidity }}%</p>
                    <p className="text-gray-700 text-md py-1">Cloud Cover: {{ info.clouds.all }}%</p>
                    <p className="text-gray-700 text-md py-1">Min Temp: {{ Math.round(info.main.temp_min) }}&deg;C</p>
                    <p className="text-gray-700 text-md py-1">Max Temp: {{ Math.round(info.main.temp_max) }}&deg;C</p>
                </div>
            </div>


        </Transition>
    </div>
    

</template>

<script>
export default {
    data() {
        return {
            show: false,
            api_key: 'e7443274d807bea0d2da7d3d7edf8965',
            url_base: 'https://api.openweathermap.org/data/2.5/weather',
            lat: '-36.615834345823934',
            long: '-72.11189288681959',
            info: null,
            temp: null
        }
    },
    mounted() {
        this.getWeather()
    },
    methods: {
        getWeather() {
            this.show = false;
            axios.get(`${this.url_base}?lat=${this.lat}&lon=${this.long}&appid=${this.api_key}&units=metric&lang=es`)
                .then(response => {
                    this.info = response.data
                    this.temp = this.info.main.temp
                    console.log(this.info)
                })
                .catch(error => console.log(error))
                .finally(() => {
                    this.show = true;
                });
        }
    }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>