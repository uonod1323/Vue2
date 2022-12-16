import { createWebHistory, createRouter } from "vue-router";
import TitleList from './components/TitleList.vue';
import DetailList from './components/DetailList.vue';
import mainPage from './components/mainPage.vue';

const routes = [
  {
    path: "/list",
    component: TitleList,
  },
  {
    path: "/detail/:id(\\d+)",
    component: DetailList,
  },
  {
    path: "/",
    component: mainPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 