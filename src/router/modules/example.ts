import type { RouteRecordRaw } from 'vue-router';

const exampleRoutes: Array<RouteRecordRaw> = [
  {
    path: '/example',
    name: 'Example',
    component: () => import('@/views/Example/Example.vue'),
    meta: {
      title: '案例',
      keepAlive: true
    },
    children: [
      {
        path: 'request',
        name: 'Request',
        meta: {
          title: '接口请求',
          keepAlive: true
        },
        component: () => import('@/views/Example/Request.vue')
      },
      {
        path: 'icon',
        name: 'Icon',
        meta: {
          title: '图标',
          keepAlive: true
        },
        component: () => import('@/views/Example/Icon.vue')
      }
    ]
  }
];
export default exampleRoutes;
