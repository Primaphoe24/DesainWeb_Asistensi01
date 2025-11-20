import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Contact from '../pages/Contact.vue'
import About from '../pages/About.vue'
import Menu from '../pages/Menu.vue'
import Order from '../pages/Order.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/About', component: About },
  { path: '/Menu', component: Menu },
  { path: '/Contact', component: Contact },
  { path: '/Order', component: Order }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
