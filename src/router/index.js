import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import signUpView from '../views/signUpView.vue'
import AddPostView from "../views/AddPostView.vue"
import auth from "../auth"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/login')
      } else {
          next();
      }
    }
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
  },
  {
    path: "/addPost",
    name: "addPost",
    component: AddPostView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
