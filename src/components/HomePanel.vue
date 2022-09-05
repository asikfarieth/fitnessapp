<template>
  <h1>Welcome!</h1>
  <div class="container">
    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-button color="secondary" class="home-btn" @click="directMP">
            <div>
              <ion-icon :icon="fastFoodSharp"></ion-icon><br /><br />
              Meal Planner
            </div>
          </ion-button>
        </ion-col>
        <ion-col>
          <ion-button color="secondary" class="home-btn" @click="directCT">
            <div>
              <ion-icon :icon="calculatorSharp"></ion-icon><br /><br />
              Calorie Tracker
            </div>
          </ion-button>
        </ion-col>
      </ion-row>
      <br />
      <ion-row>
        <ion-col>
          <ion-button color="secondary" class="home-btn" @click="directWT">
            <div>
              <ion-icon :icon="scaleSharp"></ion-icon><br /><br />
              Weight Tracker
            </div>
          </ion-button>
        </ion-col>
        <ion-col>
          <ion-button color="secondary" class="home-btn" @click="directP">
            <div>
              <ion-icon :icon="personCircleSharp"></ion-icon><br /><br />
              Profile
            </div>
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
</template>

<script>
import {
  personCircleSharp,
  fastFoodSharp,
  calculatorSharp,
  scaleSharp,
} from "ionicons/icons";
import { IonButton, IonGrid, IonRow, IonCol, IonIcon } from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { IonButton, IonGrid, IonRow, IonCol, IonIcon },
  setup() {
    // Get reference to vue router
    const router = useRouter();

    // Direct to meal planner page
    const directMP = () => {
      router.push("/tabs/home");
    };

    // Direct to calorie tracker page
    const directCT = () => {
      router.push("/tabs/calorieTracker");
    };

    // Direct to weight tracker page
    const directWT = () => {
      router.push("/tabs/weightTracker");
    };

    // Direct to meal planning page
    const directET = () => {
      router.push("/tabs/mealPlanning");
    };

    // Direct to meal planning page
    const directP = () => {
      router.push("/tabs/profile");
    };

    return {
      personCircleSharp,
      fastFoodSharp,
      calculatorSharp,
      scaleSharp,
      directMP,
      directCT,
      directWT,
      directET,
      directP,
    };
  },
});
</script>

<style scoped>
div {
  font-size: 18px;
  font-weight: bold;
}
h1 {
  text-align: center;
  font-size: 48px;
}
ion-icon {
  font-size: 115px;
}
.home-btn {
  width: 155px;
  height: 200px;
  border-radius: 50%;
}
.container {
  padding-top: 15px;
  align-items: center;
  justify-items: center;
  display: grid;
}
</style>