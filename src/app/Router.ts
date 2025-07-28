import { createRouter, createWebHistory } from 'vue-router'
import ListNewsPage from 'pages/newsListPage/ui/ListNewsPage.vue'
import NewsPage from 'pages/newsPage/NewsPage.vue'

const routes = [
  {
    path: '/',
    name: 'NewsList',
    component: ListNewsPage
  },
  {
    path: '/news/:id',
    name: 'NewsPage',
    component: NewsPage
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router