<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ExploreContainer name="Tab 1 page" />
<a-dropdown-button size="large">
    <template #overlay>
      <a-menu>
        <a-menu-item key="1">
          <UserOutlined />
          View Profile
        </a-menu-item>
        <a-menu-item key="2" @click="handleUpdateProfile">
          <UserOutlined />
          Update Profile
        </a-menu-item>
        <a-menu-item key="3" @click="handleSignOut">
          <LogoutOutlined />
          Sign Out
        </a-menu-item>
      </a-menu>
    </template>
    <template #icon><SettingOutlined /></template>
  </a-dropdown-button>
      <div class="chart-container" style="position: relative; height:25vh;">
        <PieChart :options="chartOptions" :chartData="testData"></PieChart>
      </div>

      <ion-card color="dark" style="border-radius:2em; margin: 0;">
          <!-- breakfast card-->
          <ion-card style="border-radius:1.85em">
            <ion-card-header>
              <ion-row>
                <ion-col class="ion-align-self-start"><ion-text style="font-family:'Font Awesome 6 Pro'; font-size:3em" class="fa-mug-hot"></ion-text></ion-col>
                <ion-col class="ion-align-self-end" size="2"><ion-button style="--border-radius:2em">+</ion-button></ion-col>
              </ion-row>
            </ion-card-header>
            <ion-card-content>
              <ion-card-title>Breakfast</ion-card-title>
              <ion-card-subtitle>Goal: 256 kCal</ion-card-subtitle>
            </ion-card-content>
          </ion-card>

          <!-- lunch card-->
          <ion-card style="border-radius:1.85em">
            <ion-card-header>
              <ion-row>
                <ion-col class="ion-align-self-start"><ion-text style="font-family:'Font Awesome 6 Pro'; font-size:3em" class="fa-burger"></ion-text></ion-col>
                <ion-col class="ion-align-self-end" size="2"><ion-button style="--border-radius:2em">+</ion-button></ion-col>
              </ion-row>
            </ion-card-header>
            <ion-card-content>
              <ion-card-title>Lunch</ion-card-title>
              <ion-card-subtitle>Goal: 256 kCal</ion-card-subtitle>
            </ion-card-content>
          </ion-card>

          <!-- dinner card-->
          <ion-card style="border-radius:1.85em">
            <ion-card-header>
              <ion-row>
                <ion-col class="ion-align-self-start"><ion-text style="font-family:'Font Awesome 6 Pro'; font-size:3em" class="fa-bowl-food"></ion-text></ion-col>
                <ion-col class="ion-align-self-end" size="2"><ion-button style="--border-radius:2em">+</ion-button></ion-col>
              </ion-row>
            </ion-card-header>
            <ion-card-content>
              <ion-card-title>Dinner</ion-card-title>
              <ion-card-subtitle>Goal: 256 kCal</ion-card-subtitle>
            </ion-card-content>
          </ion-card>

          <!-- snack card-->
          <ion-card style="border-radius:1.85em">
            <ion-card-header>
              <ion-row>
                <ion-col class="ion-align-self-start"><ion-text style="font-family:'Font Awesome 6 Pro'; font-size:3em" class="fa-cookie-bite"></ion-text></ion-col>
                <ion-col class="ion-align-self-end" size="2"><ion-button style="--border-radius:2em">+</ion-button></ion-col>
              </ion-row>
            </ion-card-header>
            <ion-card-content>
              <ion-card-title>Snack</ion-card-title>
              <ion-card-subtitle>Goal: 256 kCal</ion-card-subtitle>
            </ion-card-content>
          </ion-card>

      </ion-card>

        <ion-card>
          <ion-item>
            <ion-icon :icon="pin" slot="start"></ion-icon>
            <ion-label>ion-item in a card, icon left, button right</ion-label>
            <ion-button fill="outline" slot="end">View</ion-button>
          </ion-item>

          <ion-card-content>
            This is content, without any paragraph or header tags,
            within an ion-card-content element.
          </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-item href="#" class="ion-activated">
            <ion-icon :icon="wifi" slot="end"></ion-icon>
            <ion-label>Card Link Item 1 activated</ion-label>
          </ion-item>

          <ion-item href="#">
            <ion-icon :icon="wine" slot="end"></ion-icon>
            <ion-label>Card Link Item 2</ion-label>
          </ion-item>

          <ion-item class="ion-activated">
            <ion-icon :icon="warning" slot="end"></ion-icon>
            <ion-label>Card Button Item 1 activated</ion-label>
          </ion-item>

          <ion-item>
            <ion-icon :icon="walk" slot="end"></ion-icon>
            <ion-label>Card Button Item 2</ion-label>
          </ion-item>
        </ion-card>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { PieChart, usePieChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel } from '@ionic/vue';
import { pin, walk, warning, wifi, wine } from 'ionicons/icons';
import ExploreContainer from '@/components/ExploreContainer.vue';

Chart.register(...registerables);

export default  defineComponent({
  name: 'Tab1Page',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel, PieChart },
  setup() {
    
    const testData = {
      datasets: [
        {
          data: [40, 60],
          backgroundColor: ['#F3F9F3', '#3F753E'],
        },
      ],
    };
    const chartOptions = {
      cutout: "95%",
      rotation: -90,
      circumference: 180,
      plugins: {
        legend: {display: true,
        position: "bottom",
        title: {display: true, text: "kCal remaining"},},
      },
      layout: {padding: 20},
      maintainAspectRatio: false,
      responsive: true,
      borderWidth: 0,
      borderRadius: {outerEnd: 8, innerEnd:8, innerStart:-8, outerStart:-8},
      borderJoinStyle: 'bevel',
    };

    return { warning, pin, walk, wifi, wine,testData,chartOptions };
  }
  });
</script>
