import { createRouter, createWebHashHistory, RouteRecordRaw, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: () =>
      import("../views/login.vue")
  },
  {
    path: "/monitor",
    name: "monitor",
    component: () =>
      import("../views/monitor.vue"),
    children: [
      {
        path: "/chatFrame/:id",
        name: "chatFrame",
        component: () =>
          import("../components/chatFrame.vue"),
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router