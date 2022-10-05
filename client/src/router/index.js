import { createRouter, createWebHistory } from 'vue-router'
import { ElMessage } from 'element-plus'

const routes = [
  {
    path: '/zhuye',
    redirect: '/home',
    meta: { title: "首页" },
    // redirect: '/home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/zhuye/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: { title: "主页" },
        component: () => import('../views/zhuye/user/home.vue')
      },
      {
        path: '/user',
        name: 'user',
        meta: { title: "个人中心" },
        component: () => import('../views/zhuye/userinfo/index.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue')
  },
  {
    path: '/regUser',
    name: 'regUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/regUser/index.vue')
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401')
  },
  {
    path: '/404',
    name:'404',
    component: () => import('@/views/error-page/404')
  },
  {
      path: '/:pathMatch(.*)',
      redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/regUser') return next()
  if (sessionStorage.getItem("token")) {
    next();
  } else {
    ElMessage.warning("请先登录");
    next('/login');
  }
});

export default router
