<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item" :to="{ path: '/' }">
                <img src="../../assets/letter-g-svgrepo-com.svg">
            </router-link>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMainSection">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarMainSection" class="navbar-menu">
            <div class="navbar-start">
                <router-link :to="{ name: 'Home' }" class="navbar-item">
                    Home
                </router-link>
                <router-link :to="{ name: 'AboutMe' }" class="navbar-item">
                    About me
                </router-link>
                <router-link :to="{ name: 'Skills' }" class="navbar-item">
                    Skills
                </router-link>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                      <button class="button is-primary">Sign Up</button>
                        <gsh-select
                            label="Language"
                            :items="languages"
                            @change="onLanguageChange"
                            is-rounded />
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import {useRoute, useRouter} from 'vue-router'
import {onMounted, ref, watch} from 'vue';
import {onWindowSizeChange} from '@/services'
import {GshSelect} from '@/components/atoms'
import {ELanguageList, ISelectOption, TSelectOptions} from "@/types";

const router = useRouter()
const routes = useRoute()

const languages: TSelectOptions = [
  {
    value: ELanguageList.ru,
    label: 'Russian'
  },
  {
    value: ELanguageList.en,
    label: 'English'
  }
]
const languageRef = ref<ISelectOption>({
  value: ELanguageList.ru,
  label: 'Russian'
})

const onLanguageChange = (value: ISelectOption) => {
  languageRef.value = value
}

onMounted(() => {
    window.addEventListener('resize', onWindowSizeChange)
})

watch(languageRef, (newValue) => {
  console.log(newValue)
}, {
  immediate: true
})
</script>

<style lang="scss" scoped>
    @use "../../styles/variables" as v;
   
   .navbar {
    &__item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
   }

   .router_link {
    vertical-align: center;
   }

   .buttons .button {
     margin-bottom: 0;
   }
</style>