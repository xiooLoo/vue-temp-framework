const Login = r => require.ensure([], () => r(require('../views/login')), 'login')

const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    redirect: '/login'
  }
]

export default routes