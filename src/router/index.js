import Vue from 'vue'
import VueRouter from 'vue-router'
import AddTask from '../views/AddTask'
import TaskList from '../views/TaskList'

Vue.use(VueRouter)

const routes = [
  {path: '/AddTask', component: AddTask},
  {path: '/', component: AddTask},
  {path: '/TaskList', component: TaskList}
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router




// {
//   path: '/',
//   name: 'Home',
//   component: Home
// },
// {
//   path: '/about',
//   name: 'About',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// }