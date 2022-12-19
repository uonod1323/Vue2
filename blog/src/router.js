import { createWebHistory, createRouter } from "vue-router";
import TitleList from './components/TitleList.vue';
import DetailList from './components/DetailList.vue';
import mainPage from './components/mainPage.vue';
import AuthorList from './components/AuthorList.vue';
import CommentList from './components/CommentList.vue';

const routes = [
  {
    path: "/detail/:id",
    component: DetailList,
    children: [
      {
        path: "author",
        component: AuthorList,
      },
      {
        path: "comment",
        component: CommentList,
      },
    ]
  },
  {
    path: "/list",
    component: TitleList,
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