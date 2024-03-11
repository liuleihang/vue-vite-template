import type { RouteRecordRaw } from 'vue-router'

 const exampleRoutes: Array<RouteRecordRaw> = [
  {
    path: '/example',
    name: "Example",
    meta: {
      title: "案例",
      keepAlive: true,
    },
    children: [
      {
        path: 'request',
        name: "Request",
        meta: {
          title: "接口请求",
          keepAlive: true,
        },
        component: () => import('@/views/Example/Request.vue'),
      },
    ]
  },
]
export default exampleRoutes