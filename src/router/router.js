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
      path: '/user',
      component: r => require.ensure([], () => r(require('../page/user/user')), 'user'),
      children: [
        {
          path: 'like',
          component: r => require.ensure([], () => r(require('../page/user/children/like')), 'like')
        },
        {
          path: 'comment',
          component: r => require.ensure([], () => r(require('../page/user/children/comment')), 'comment')
        }
        // {
        //   path: 'edit',
        //   component: r => require.ensure([], () => r(require('../page/user/children/edit/edit')), 'edit'),
        //   children: [
        //     {
        //       path: 'username',
        //       component: r => require.ensure([], () => r(require('../page/user/children/edit/children/username')), 'username')
        //     },
        //     {
        //       path: 'avatar',
        //       component: r => require.ensure([], () => r(require('../page/user/children/edit/children/avatar')), 'avatar')
        //     }
        //   ]
        // }
      ]
    },
    {
      path: '/login',
      component: r => require.ensure([], () => r(require('../page/login/login')), 'login')
    },
    {
      path: '/register',
      component: r => require.ensure([], () => r(require('../page/login/register')), 'register')
    },
    {
      path: '/setpassword',
      component: r => require.ensure([], () => r(require('../page/login/setpassword')), 'setpassword')
    }
  ]
}]
