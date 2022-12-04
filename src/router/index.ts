import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePageView from '@/views/HomePageView.vue'
import AboutMeView from '@/views/AboutMeView.vue'
import SkillsView from '@/views/SkillsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: HomePageView
  },
  {
    path: '/aboutMe',
    name: 'AboutMe',
    component: AboutMeView
  },
  {
    path: '/skills',
    name: 'Skills',
    component: SkillsView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
