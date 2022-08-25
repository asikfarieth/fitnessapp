<template>
  <ion-page>
    <ion-content>
      <SettingsButton />
      <HomePanel />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import SettingsButton from "@/components/SettingsButton.vue";
import HomePanel from "@/components/HomePanel.vue";

export default defineComponent({
  components: { SettingsButton, HomePanel, IonPage, IonContent },
});
</script>