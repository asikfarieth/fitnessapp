<template>
  <ion-page>
    <ion-content>
      <RegisterPanel />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import RegisterPanel from "@/components/RegisterPanel.vue";

export default defineComponent({
  components: { RegisterPanel, IonPage, IonContent },
});
</script>