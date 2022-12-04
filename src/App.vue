<template>
  <!DOCTYPE html>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <gsh-navbar/>
  <router-view/>
</template>

<script lang="ts" setup>
import GshNavbar from './components/molecules/GshNavbar.vue';
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,500;0,700;1,100;1,200;1,500;1,700&display=swap');

  body {
    font-family: 'Noto Sans', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
  }
</style>
