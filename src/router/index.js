import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue';  // HOC 에  의해 사용하지 않음.
import AskView from '../views/AskView.vue';  // HOC 에  의해 사용하지 않음.
import JobsView from '../views/JobsView.vue';  // HOC 에  의해 사용하지 않음.
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import createListView from '../views/CreateListView'
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
      // component: createListView('NewsView'), //HOC 사용시
    },
    {
      name:'ask',
      path: '/ask',
      component: AskView,
      // component: createListView('AskView'),
    },
    {
      name:'jobs',
      path: '/jobs',
      component: JobsView,
      // component: createListView('JobsView'),
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
