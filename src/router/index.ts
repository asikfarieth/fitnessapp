import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import TabsPage from '../views/TabsPage.vue'
import HomeMain from "../views/HomeMain.vue";
import LoginMain from "../views/LoginMain.vue";
import RegisterMain from "../views/RegisterMain.vue";
import UpdateProfile from "../views/UpdateProfile.vue";
import ViewProfile from "../views/ViewProfile.vue";

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
    // Only authenticated user can enter this page
    meta: {
      requiresAuth: true,
    },
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
  {
    path: "/view-profile",
    name: "viewProfile",
    component: ViewProfile,
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

// Initialise firebase user
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

// Make certain pages only accesible to authenticated user
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      console.log("You don't have acess!");
      next("/login");
    }
  } else {
    next();
  }
});

export default router
