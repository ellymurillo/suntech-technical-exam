import { createRouter, createWebHistory } from "vue-router";

import MainTemplate from "@/templates/MainTemplate.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "",
        component: MainTemplate,
        children: [
          {
            path: "",
            name: "form",
            component: () => import("@/pages/Form.vue")
          },
          {
            path: "details",
            name: "details",
            component: () => import("@/pages/Details.vue")
          },
          {
            path: "edit",
            name: "edit",
            component: () => import("@/pages/Form.vue")
          },
        ]
      }
    ]
  })
  
  export default router