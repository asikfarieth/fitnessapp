<template>
  <ion-page>
    <ion-content>
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