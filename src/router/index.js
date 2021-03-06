import Vue from 'vue'
import VueRouter from 'vue-router'
import AddTask from '../views/AddTask'
import TaskList from '../views/TaskList'
import UpdateTask from '../views/UpdateTask'

Vue.use(VueRouter)

const routes = [
  {path: '/AddTask', component: AddTask},
  {path: '/', component: TaskList},
  {path: '/TaskList', component: TaskList},
  {path: '/UpdateTask/:id', component: UpdateTask}
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