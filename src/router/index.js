import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '@/views/portfolio.vue'
import AboutView from '@/views/about.vue'
import TodoContentView from '@/views/todoContent.vue'
import AdminView from '@/views/admin.vue'
import store  from '../store'
import { todos } from '@/assets/todos'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio',
    name: 'PortfolioView',
    component: PortfolioView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/TodoContent/:TodoId',
    name: 'TodoContentView',
    component: TodoContentView
  },
  {
    path: '/admin',
    name: 'AdminView',
    component: AdminView,
    meta: {
      requiresAdmin : true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const todo = store.state.todo

  if (!todo) {
    await store.dispatch('setTodo', todos)
  }
  const isAdmin = false;
  
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)

  if (requiresAdmin && !isAdmin) {
    next({name: 'home'})
  } else {
    next()
  }
})

export default router
