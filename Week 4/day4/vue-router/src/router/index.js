import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/careers',
    name: 'careers',
    component: () => import(/* webpackChunkName: "about" */ '../views/CareersView.vue')
  },
  {
    path: '/suggestions',
    name: 'suggestions',
    component: () => import(/* webpackChunkName: "about" */ '../views/SuggestionsView.vue')
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import(/* webpackChunkName: "about" */ '../views/TestimonialsView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
