import { createRouter, createWebHistory } from "vue-router";
import IEO from "./containers/IEO/Index.vue";
import Portfolio from "./containers/portfolio/Index.vue";
import Transactions from "./containers/transactions/Index.vue";
import FAQ from "./containers/faq/Index.vue";
import Documentation from "./containers/documentation/Index.vue";
import News from "./containers/news/Index.vue";
import Account from "./containers/account/Index.vue";
import NotFound from "./containers/not-found/Index.vue";
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
          path: "ieo",
          component: IEO,
        },
        {
          path: "transactions",
          component: Transactions,
        },
        {
          path: "faq",
          component: FAQ,
        },
        {
          path: "documentation",
          component: Documentation,
        },
        {
          path: "news",
          component: News,
        },
        {
          path: "account",
          component: Account,
        },
        {
          path: "404",
          name: "NotFound",
          component: NotFound,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "NotFound" },
    },
  ],
});
