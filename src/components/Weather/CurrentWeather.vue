<script setup>
import axios from 'axios'
</script>
<template>

    <Transition>
        <div v-if="show"
            class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 bg-white p-5 bg-opacity-80 rounded-3xl m-5 ring-4 ring-white ring-opacity-40">
            <div class=" flex flex-col justify-center items-center text-center p-2">
                <div class="text-md font-bold flex flex-col text-gray-900"><span class="uppercase">Today</span>
                    <span class="font-normal text-gray-700 text-sm">{{ date }}</span>
                </div>
                <div class="w-40 h-40 flex items-center justify-center">
                    <img :src="`src/assets/weather/fill/openweathermap/${info.weather[0].icon}.svg`" alt="">
                </div>
                <p class="text-gray-700 mb-2">{{ info.weather[0].description }}</p>
                <div class="text-3xl font-bold text-gray-900 mb-6">{{ info.main.temp }}º</div>
                <p class="text-gray-500 text-sm">{{ info.name }}, Chile</p>

            </div>
            <div
                className="flex flex-col justify-center items-center  sm:border-l-2 border-t-2 sm:border-t-0 border-white p-2">
                <p className="text-gray-700 text-md py-2">RealFeel: {{ Math.round(info.main.feels_like) }}&deg;C</p>
                <p className="text-gray-700 text-md py-2">Humidity: {{ info.main.humidity }}%</p>
                <p className="text-gray-700 text-md py-2">Cloud Cover: {{ info.clouds.all }}%</p>
                <p className="text-gray-700 text-md py-2">Min Temp: {{ Math.round(info.main.temp_min) }}&deg;C</p>
                <p className="text-gray-700 text-md py-2">Max Temp: {{ Math.round(info.main.temp_max) }}&deg;C</p>
                <p className="text-gray-700 text-md py-2">Wind Speed: {{ Math.round(info.wind.speed) }}MPH</p>
                <p className="text-gray-700 text-md py-2">Sunrise: {{ info.sys.sunrise }} AM</p>
                <p className="text-gray-700 text-md py-2">Sunset: {{ info.sys.sunset }} PM</p>
            </div>
        </div>

    </Transition>

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
            date: null
        }
    },
    mounted() {
        this.getWeather();
        this.getDate();
    },
    methods: {
        async getWeather() {
            this.show = false;
            await axios.get(`${this.url_base}?lat=${this.lat}&lon=${this.long}&appid=${this.api_key}&units=metric&lang=es`)
                .then(response => {
                    this.info = response.data
                    this.info.weather[0].description = this.capitalizeFirstLetter(this.info.weather[0].description)
                    
                    let sunrise = new Date(this.info.sys.sunrise)
                    this.info.sys.sunrise = sunrise.getHours() + ":" + sunrise.getMinutes()
                    let sunset = new Date(this.info.sys.sunset)
                    this.info.sys.sunset = sunset.getHours() + ":" + sunset.getMinutes()
                    console.log(this.info)
                })
                .catch(error => console.log(error))
                .finally(() => {
                    this.show = true;
                });
        },
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        getDate() {
            const moths = [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
                "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
            ];
            let dateNow = new Date()
            this.date = moths[dateNow.getMonth()] + " " + dateNow.getDate()
            console.log(this.date)
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