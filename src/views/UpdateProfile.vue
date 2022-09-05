<template>
  <ion-page
    ><ion-header>
      <ion-toolbar>
        <ion-title>Edit Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Edit Profile</ion-title>
        </ion-toolbar>
      </ion-header>
      <ReturnHomeButton />
      <UpdateProfilePanel />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import ReturnHomeButton from "@/components/ReturnHomeButton.vue";
import UpdateProfilePanel from "@/components/UpdateProfilePanel.vue";

export default defineComponent({
  components: { IonPage, IonContent, ReturnHomeButton, UpdateProfilePanel },
});
</script>