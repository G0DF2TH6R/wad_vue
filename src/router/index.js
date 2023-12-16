import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import signUpView from '../views/signUpView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: ContactUsView
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: signUpView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
