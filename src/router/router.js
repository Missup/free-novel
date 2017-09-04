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
      path: '/rank',
      component: r => require.ensure([], () => r(require('../page/rank/rank')), 'rank'),
      children: [
        {
          path: 'travel',
          component: r => require.ensure([], () => r(require('../page/rank/children/travel')), 'travel')
        },
        {
          path: 'campus',
          component: r => require.ensure([], () => r(require('../page/rank/children/campus')), 'campus')
        },
        {
          path: 'ceo',
          component: r => require.ensure([], () => r(require('../page/rank/children/ceo')), 'ceo')
        },
        {
          path: 'underworld',
          component: r => require.ensure([], () => r(require('../page/rank/children/underworld')), 'underworld')
        },
        {
          path: 'immortal',
          component: r => require.ensure([], () => r(require('../page/rank/children/immortal')), 'immortal')
        },
        {
          path: 'online',
          component: r => require.ensure([], () => r(require('../page/rank/children/online')), 'online')
        },
        {
          path: 'urban',
          component: r => require.ensure([], () => r(require('../page/rank/children/urban')), 'urban')
        },
        {
          path: 'ghost',
          component: r => require.ensure([], () => r(require('../page/rank/children/ghost')), 'ghost')
        },
        {
          path: 'history',
          component: r => require.ensure([], () => r(require('../page/rank/children/history')), 'history')
        },
        {
          path: 'games',
          component: r => require.ensure([], () => r(require('../page/rank/children/games')), 'games')
        },
        {
          path: 'society',
          component: r => require.ensure([], () => r(require('../page/rank/children/society')), 'society')
        },
        {
          path: 'war',
          component: r => require.ensure([], () => r(require('../page/rank/children/war')), 'war')
        }
      ]
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
