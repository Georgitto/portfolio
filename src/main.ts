import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { isLocalStorageAvailable, isUserLocaleExist, getUserLocale, setUserLocale } from '@/services'
import { EUserLocales } from '@/types'
import App from './App.vue'
import router from './router'
import store from './store'

const defaultLocale = EUserLocales.RU
const i18nConfig = {
    locale: defaultLocale
}

if(isLocalStorageAvailable()) {
    if(!isUserLocaleExist()) setUserLocale(defaultLocale)
    i18nConfig.locale = getUserLocale()
} else {
    i18nConfig.locale = defaultLocale
}

const i18n = createI18n(i18nConfig)

createApp(App).use(store).use(router).use(i18n).mount('#app')
