import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TopHeadline from '../views/TopHeadline.vue'
import UserSearch from '../views/UserSearch.vue'
import Profile from '../views/Profile.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'topheadline',
        component: TopHeadline
      },
      {
        path: 'usersearch',
        component: UserSearch
      },
      {
        path: 'profile',
        component: Profile
      }
    ]
  },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
