import App from '../App'

export default [{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      component: r => require.ensure([], () => r(require('../page/home/home')), 'home')
    },
    {
      path: '/home',
      component: r => require.ensure([], () => r(require('../page/home/home')), 'home'),
      children: [
        {
          path: 'recommend',
          component: r => require.ensure([], () => r(require('../page/home/children/recommend')), 'recommend')
        },
        {
          path: 'rank',
          component: r => require.ensure([], () => r(require('../page/home/children/rank')), 'rank')
        }
      ]
    },
    {
      path: '/rank',
      component: r => require.ensure([], () => r(require('../page/rank/rank')), 'rank')
    },
    {
      path: '/detail/:id',
      component: r => require.ensure([], () => r(require('../page/detail/detail')), 'detail')
    },
    {
      path: '/search/:geohash',
      component: r => require.ensure([], () => r(require('../page/search/search')), 'search')
    }
  ]
}]
