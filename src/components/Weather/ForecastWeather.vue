<script setup>
import axios from 'axios'
</script>

<template>

    <Transition>
        <div v-if="show"
            class="grid grid-rows bg-white p-6 lg:px-16 bg-opacity-80 rounded-3xl m-5 ring-4 ring-white ring-opacity-40 gap-3">
            <div v-for="item in info" class="flex justify-between items-center">
                <span class="text-md text-gray-700">{{ item.dt }}</span>

                <div class="flex items-center justify-center px-3">
                    <span class="font-semibold">{{ item.humidity }}%</span>
                    <div class="w-6 h-6 flex items-center justify-center">
                        <img :src="`src/assets/weather/fill/all/raindrop.svg`" alt="">
                    </div>
                </div>

                <div class="w-8 h-8 flex items-center justify-center pr-2">
                    <img :src="`src/assets/weather/fill/openweathermap/${item.weather[0].icon}.svg`" alt="">
                </div>

                <span class="font-semibold text-md text-right w-16">{{ Math.round(item.temp.min) }}&deg;/{{ Math.round(item.temp.max) }}&deg;</span>
            </div>
        </div>
    </Transition>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            api_key: '41c06d8f13cfbd976e5123eb5821a4e6',
            url_base: 'https://api.openweathermap.org/data/2.5/forecast/daily',
            lat: '-36.615834345823934',
            long: '-72.11189288681959',
            info: null,

        }
    },
    mounted() {
        this.getWeather();
    },
    methods: {
        async getWeather() {
            this.show = false;
            await axios.get(`${this.url_base}?lat=${this.lat}&lon=${this.long}&appid=${this.api_key}&units=metric&lang=es`)
                .then(response => {
                    const moths = [
                        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
                        "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
                    ];
                    const week = [
                        "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"
                    ];

                    this.info = response.data.list;


                    // this.info = response.data.list.filter(function (item) {
                    //     let date = new Date(item.dt_txt);

                    //     return date.getHours() == 12;
                    // });
                    this.info.shift()
                    this.info = this.info.map(function (item) {
                        let date = new Date(item.dt*1000);

                        item.dt= week[date.getDay()] + ', ' + date.getDate() + ' de ' + moths[date.getMonth()]
                        // console.log(date);
                        return item;
                    });

                    console.log(this.info);
            
                })
                .catch(error => console.log(error))
                .finally(() => {
                    this.show = true;
                });
        },
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