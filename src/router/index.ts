import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '主页'
      },
    },

    {
      path: '/intro',
      name: 'intro',
      component: () => import('../views/Intro.vue'),
      meta: {
        title: '详情'
      },
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },

    {
      path: '/dev',
      name: 'dev',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Dev.vue'),
      meta: {
        title: '软件开发'
      },
    },
    
    // 404 页面
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: import('../views/404.vue'),
      meta:{
        title:"找不到页面"
      },
    },
  ]
})

// 添加路由守卫以便能够更改标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `开放，包容，细致，坚守 ——— 玟茵开源社区（${to.meta.title as string}）`;
  }
  next();
});

export default router
