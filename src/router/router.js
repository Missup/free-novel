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
      component: r => require.ensure([], () => r(require('../page/home/home')), 'home')
    },
    {
      path: '/rank/:rankname',
      component: r => require.ensure([], () => r(require('../page/rank/rank')), 'rank')
    },
    {
      path: '/detail/:id',
      component: r => require.ensure([], () => r(require('../page/detail/detail')), 'detail')
    },
    {
      path: '/search',
      component: r => require.ensure([], () => r(require('../page/search/search')), 'search')
    },
    {
      path: '/help',
      component: r => require.ensure([], () => r(require('../page/help/help')), 'help')
    }
  ]
}]
