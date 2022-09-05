<template>
  <ion-page color="primary">
    <ion-tabs color="dark">
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar>
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="homeSharp" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="calorieTracker" href="/tabs/calorieTracker">
          <ion-icon :icon="calculatorSharp" />
          <ion-label>Calorie Tracker</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="weightTracker" href="/tabs/weightTracker">
          <ion-icon :icon="scaleSharp" />
          <ion-label>Weight Tracker</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="mealPlanner" href="/tabs/mealPlanner">
          <ion-icon :icon="fastFoodSharp" />
          <ion-label>Meal Planner</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="profile" href="/tabs/profile">
          <ion-icon :icon="personCircleSharp" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import {
  scaleSharp,
  calculatorSharp,
  fastFoodSharp,
  homeSharp,
  personCircleSharp,
} from "ionicons/icons";

export default defineComponent({
  name: "TabsPage",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      scaleSharp,
      calculatorSharp,
      fastFoodSharp,
      homeSharp,
      personCircleSharp,
    };
  },
});
</script>