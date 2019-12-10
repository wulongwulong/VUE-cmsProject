import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Member from '@/components/Member'
import ShopCar from '@/components/ShopCar'
import Search from '@/components/Search'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/shopcar',
      name: 'ShopCar',
      component: ShopCar
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/news/newsList',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/news/newsDetail/:id',
      name: 'newsDetail',
      component: NewsDetail
    },

  ]
})
