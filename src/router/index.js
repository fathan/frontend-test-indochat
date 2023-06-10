import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from '@pages/Home';

import PageNotFound from '@components/Layouts/PageNotFound';

/**
 *  NOTE:
 * 
 * route level code-splitting
   this generates a separate chunk (About.[hash].js) for this route
   which is lazy-loaded when the route is visited.
 */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/episodes',
      name: 'Episode',
      component: defineAsyncComponent(() => import('@pages/Episodes')),
      redirect: '/episodes',
      children: [
        {
          path: '',
          name: 'Episode List',
          component: defineAsyncComponent(() => import('@pages/Episodes/components/List'))
        },
        {
          path: ':episodeId',
          name: 'Episode Detail',
          component: defineAsyncComponent(() => import('@pages/Episodes/components/Detail'))
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Page Not Found',
      component: PageNotFound
    }
  ]
})

export default router
