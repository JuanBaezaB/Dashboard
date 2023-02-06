<script setup>
import HelloWorld from './components/HelloWorld.vue'
import DarkModeToggle from './components/DarkModeToggle.vue'
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue';
import WeatherWidget from './components/Weather/WeatherWidget.vue';
</script>

<template>
  <div id="page-container" class="sidebar-o side-trans-enabled ">
    <Sidebar />
    <Header />
    <WeatherWidget/>
    
  </div>


</template>


