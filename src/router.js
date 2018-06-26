import Vue from 'vue'
import Router from 'vue-router'
import Films from './views/Films.vue'
import About from './views/About.vue'
import Movie from './views/Movie.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'films',
      component: Films
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: "/movie/:id",
      name: "Movie Detail",
      component: Movie
    }
  ]
})
