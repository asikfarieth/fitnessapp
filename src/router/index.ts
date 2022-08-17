import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import HomeMain from "../views/HomeMain.vue";
import LoginMain from "../views/LoginMain.vue";
import RegisterMain from "../views/RegisterMain.vue";
import UpdateProfile from "../views/UpdateProfile.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/tab1",
      },
      {
        path: "tab1",
        component: () => import("@/views/Tab1Page.vue"),
      },
      {
        path: "tab2",
        component: () => import("@/views/Tab2Page.vue"),
      },
      {
        path: "tab3",
        component: () => import("@/views/Tab3Page.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LoginMain,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterMain,
  },
  {
    path: "/",
    name: "HomeMain",
    component: HomeMain,
    // Only authenticated user can enter this page
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/update-profile",
    name: "updateProfile",
    component: UpdateProfile,
    // Only authenticated user can enter this page
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
