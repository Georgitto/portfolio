import { EUserLocales } from "@/types";

export function isLocalStorageAvailable():boolean {
    try {
        localStorage.setItem('test', 'test')
        localStorage.removeItem('test')
        return true
    } catch(e) {
        return false
    }
}

export function isUserLocaleExist(): boolean {
    const localStorageKeys = Object.keys(localStorage)
    
    return localStorageKeys.some(key => key === 'locale')
}

export function setUserLocale(locale: EUserLocales):void {
    localStorage.setItem('locale', locale)
}

export function getUserLocale(): EUserLocales {
   return localStorage.getItem('locale') as EUserLocales
}
