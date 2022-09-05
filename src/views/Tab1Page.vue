<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Calorie Tracker</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Calorie Tracker</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="chart-container" style="position: relative; height: 25vh">
        <PieChart :options="chartOptions" :chartData="testData"></PieChart>
      </div>

      <ion-card color="dark" style="border-radius: 2em; margin: 0">
        <!-- breakfast card-->
        <ion-card style="border-radius: 1.85em">
          <ion-card-header>
            <ion-row>
              <ion-col class="ion-align-self-start"
                ><ion-text
                  style="font-family: 'Font Awesome 6 Pro'; font-size: 3em"
                  class="fa-mug-hot"
                ></ion-text
              ></ion-col>
              <ion-col class="ion-align-self-end" size="2"
                ><ion-button style="--border-radius: 2em"
                  >+</ion-button
                ></ion-col
              >
            </ion-row>
          </ion-card-header>
          <ion-card-content>
            <ion-card-title>Breakfast</ion-card-title>
            <ion-card-subtitle>Goal: 256 kCal</ion-card-subtitle>
          </ion-card-content>
        </ion-card>

        <!-- lunch card-->
        <ion-card style="border-radius: 1.85em">
          <ion-card-header>
            <ion-row>
              <ion-col class="ion-align-self-start"
                ><ion-text
                  style="font-family: 'Font Awesome 6 Pro'; font-size: 3em"
                  class="fa-burger"
                ></ion-text
              ></ion-col>
              <ion-col class="ion-align-self-end" size="2"
                ><ion-button style="--border-radius: 2em"
                  >+</ion-button
                ></ion-col
              >
            </ion-row>
          </ion-card-header>
          <ion-card-content>
            <ion-card-title>Lunch</ion-card-title>
            <ion-card-subtitle>Goal: 256 kCal</ion-card-subtitle>
          </ion-card-content>
        </ion-card>

        <!-- dinner card-->
        <ion-card style="border-radius: 1.85em">
          <ion-card-header>
            <ion-row>
              <ion-col class="ion-align-self-start"
                ><ion-text
                  style="font-family: 'Font Awesome 6 Pro'; font-size: 3em"
                  class="fa-bowl-food"
                ></ion-text
              ></ion-col>
              <ion-col class="ion-align-self-end" size="2"
                ><ion-button style="--border-radius: 2em"
                  >+</ion-button
                ></ion-col
              >
            </ion-row>
          </ion-card-header>
          <ion-card-content>
            <ion-card-title>Dinner</ion-card-title>
            <ion-card-subtitle>Goal: 256 kCal</ion-card-subtitle>
          </ion-card-content>
        </ion-card>

        <!-- snack card-->
        <ion-card style="border-radius: 1.85em">
          <ion-card-header>
            <ion-row>
              <ion-col class="ion-align-self-start"
                ><ion-text
                  style="font-family: 'Font Awesome 6 Pro'; font-size: 3em"
                  class="fa-cookie-bite"
                ></ion-text
              ></ion-col>
              <ion-col class="ion-align-self-end" size="2"
                ><ion-button style="--border-radius: 2em"
                  >+</ion-button
                ></ion-col
              >
            </ion-row>
          </ion-card-header>
          <ion-card-content>
            <ion-card-title>Snack</ion-card-title>
            <ion-card-subtitle>Goal: 256 kCal</ion-card-subtitle>
          </ion-card-content>
        </ion-card>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { PieChart, usePieChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";
import { pin, walk, warning, wifi, wine } from "ionicons/icons";

Chart.register(...registerables);

export default defineComponent({
  name: "Tab1Page",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    PieChart,
  },
  setup() {
    const testData = {
      datasets: [
        {
          data: [40, 60],
          backgroundColor: ["#F3F9F3", "#3F753E"],
        },
      ],
    };
    const chartOptions = {
      cutout: "95%",
      rotation: -90,
      circumference: 180,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          title: { display: true, text: "kCal remaining" },
        },
      },
      layout: { padding: 20 },
      maintainAspectRatio: false,
      responsive: true,
      borderWidth: 0,
      borderRadius: {
        outerEnd: 8,
        innerEnd: 8,
        innerStart: -8,
        outerStart: -8,
      },
      borderJoinStyle: "bevel",
    };

    return { warning, pin, walk, wifi, wine, testData, chartOptions };
  },
});
</script>