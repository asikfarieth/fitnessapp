import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import Tab1Page from "../views/Tab1Page.vue";
import Tab2Page from "../views/Tab2Page.vue";
import Tab3Page from "../views/Tab3Page.vue";
import TabsPage from "../views/TabsPage.vue";
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
        path: "home",
        component: HomeMain,
      },
      {
        path: "calorieTracker",
        component: Tab1Page,
      },
      {
        path: "weightTracker",
        component: Tab2Page,
      },
      {
        path: "mealPlanner",
        component: Tab3Page,
      },
      {
        path: "profile",
        component: ViewProfile,
      },
      {
        path: "updateProfile",
        component: UpdateProfile,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

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
      console.log("You don't have access!");
      next("/login");
    }
  } else {
    next();
  }
});

export default router
