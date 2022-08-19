<template>
  <ion-page>
    <ion-content>
      <LoginPanel />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import LoginPanel from "@/components/LoginPanel.vue";

export default defineComponent({
  components: { LoginPanel, IonPage, IonContent },
});
</script>