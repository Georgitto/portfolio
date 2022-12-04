<template>
    <div class="navbar">
        <div class="navbar__left">Georgii Shaporenko</div>
        <div class="navbar__center">
            <router-link :to="{ name: 'Home' }">Home</router-link>
            <router-link :to="{ name: 'AboutMe' }">About me</router-link>
            <router-link :to="{ name: 'Skills' }">Skills</router-link>
        </div>
        <div class="navbar__right">
            Language
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const routes = useRoute()
</script>

<style lang="scss" scoped>
    @use "../../styles/variables" as v;
    .navbar {
        background-color: v.$base-color;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__center {
            display: flex;
            justify-content: space-between;
            min-width: 200px;
        }
    }
</style>