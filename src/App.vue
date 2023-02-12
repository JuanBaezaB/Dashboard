<script setup>
import HelloWorld from './components/HelloWorld.vue'
import DarkModeToggle from './components/DarkModeToggle.vue'
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue';
import WeatherWidget from './components/Weather/WeatherWidget.vue';

import cosa from './components/full_width_with_sidebar.vue';
</script>

<template>
  
  <div id="page-container" class="sidebar-o side-trans-enabled min-h-full transition-all duration-200 ease-in-out">
    <div id="sidenav-overlay"></div>
    <Sidebar />
    <div class="flex flex-col ">
      <Header />
      <main id="main-panel" >
        <WeatherWidget />
      </main>
    </div>
   


  </div>
  <!-- <cosa /> -->

</template>


