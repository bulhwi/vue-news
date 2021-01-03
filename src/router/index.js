import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      redirect: '/news'
    },
    {
      name:'news',
      path: '/news',
      component: NewsView,
    },
    {
      name:'ask',
      path: '/ask',
      component: AskView,
    },
    {
      name:'jobs',
      path: '/jobs',
      component: JobsView,
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
