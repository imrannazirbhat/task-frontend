import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Configuration from '../views/Configuration.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/configuration',
    name: 'Configuration',
    component: Configuration,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
