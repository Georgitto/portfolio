<template>
  <!DOCTYPE html>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <div class="block">
    <gsh-navbar/>
  </div>
  <router-view/>
</template>

<script lang="ts" setup>
import GshNavbar from './components/molecules/GshNavbar.vue';
</script>

<style lang="scss">
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,500;0,700;1,100;1,200;1,500;1,700&display=swap');

  body {
    font-family: 'Noto Sans', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
  }

  .field-label {
    margin-right: 0.75rem;
  }
</style>
