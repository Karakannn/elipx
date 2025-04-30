import { createRouter, createWebHistory } from "vue-router";
import IEO from "./containers/IEO/Index.vue";
import Portfolio from "./containers/portfolio/Index.vue";
import Layout from "./Layout.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "", 
          component: Portfolio,
        },
        {
          path: "about",
          component: IEO,
        },
        {
          path: "contact",
          component: IEO,
        },
      ],
    },
  ],
});
