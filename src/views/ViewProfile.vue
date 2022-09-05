<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>View Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">View Profile</ion-title>
        </ion-toolbar>
      </ion-header>
      <ReturnHomeButton />
      <ViewProfilePanel />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import ReturnHomeButton from "@/components/ReturnHomeButton.vue";
import ViewProfilePanel from "@/components/ViewProfilePanel.vue";

export default defineComponent({
  components: { IonPage, IonContent, ReturnHomeButton, ViewProfilePanel },
});
</script>