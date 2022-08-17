<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
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
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      <ExploreContainer name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
  name: 'Tab3Page',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>
