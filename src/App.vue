<script setup>
import {ref} from 'vue';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';

const drawer = ref(false);
const toggleDrawer = () => (drawer.value = !drawer.value);
</script>

<template>
  <v-app id="inspire">
    <Sidebar :drawer="drawer"/>
    <Header @handleDrawer="toggleDrawer"/>

    <v-main>
      <v-container
          class="py-8 px-6"
          fluid
      >
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
