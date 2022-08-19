<template>
  <ion-page>
    <ion-content>
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