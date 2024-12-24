import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewsView from "../views/NewsView.vue";
import LoginView from "../views/LoginView.vue";
import CrowdFund from "../views/CrowdFund.vue";
import CFDetail from "../views/CrowdFundDetail.vue";
import CrowdFundDetail from "@/views/CrowdFundDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: '/crowdfund',
      name: 'CrowdFund',
      component: CrowdFund,
    },
    {
      path: '/crowdfund/:id',
      name: 'CrowdFundDetail',
      component: CrowdFundDetail
    }
  ],
});

export default router;
