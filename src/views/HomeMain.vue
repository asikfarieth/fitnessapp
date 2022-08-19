<template>
  <ion-page>
    <ion-content>
      <SettingsButton />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import SettingsButton from "@/components/SettingsButton.vue";

export default defineComponent({
  components: { SettingsButton, IonPage, IonContent },
});
</script>