<template>
  <ion-page>
    <div class="container">
      <a-form v-bind="layout">
        <!-- Name Form -->
        <a-form-item justify="center">
          <h3>Full Name</h3>
          <a-input v-model:value="name" />
        </a-form-item>

        <!-- Age Form -->
        <a-form-item justify="center">
          <h3>Age</h3>
          <a-input-number v-model:value="age" />
        </a-form-item>

        <!-- Height Form -->
        <a-form-item justify="center">
          <h3>Height</h3>
          <a-input-number v-model:value="height" addon-after="cm" />
        </a-form-item>

        <!-- Weight Form -->
        <a-form-item justify="center">
          <h3>Weight</h3>
          <a-input-number v-model:value="weight" addon-after="kg" />
        </a-form-item>

        <!-- Fitness Goals Form -->
        <a-form-item justify="center">
          <h3>Fitness Goals</h3>
          <a-radio-group v-model:value="fitness_goals">
            <a-radio-button value="Gain Weight">Gain Weight</a-radio-button>
            <a-radio-button value="Maintain Weight"
              >Maintain Weight</a-radio-button
            >
            <a-radio-button value="Lose Weight">Lose Weight</a-radio-button>
            <a-radio-button value="Gain Muscles">Gain Muscles</a-radio-button>
            <a-radio-button value="Manage Stress">Manage Stress</a-radio-button>
          </a-radio-group>
        </a-form-item>

        <!-- Update Button -->
        <a-form-item justify="center">
          <a-button @click="update" type="primary">Update</a-button>
        </a-form-item>
      </a-form>
    </div>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { doc, setDoc } from "firebase/firestore";
import db from "@/firebase";
import { getAuth } from "firebase/auth";
import { useRouter } from "vue-router";
import { IonPage } from "@ionic/vue";
export default defineComponent({
  components: {
    IonPage,
  },

  data() {
    return {
      name: null,
      age: null,
      height: null,
      weight: null,
      fitness_goals: null,
    };
  },

  methods: {
    // Update user info to database
    async update() {
      await setDoc(doc(db, "Users", getAuth().currentUser.uid), this.$data);
      console.log("User info is updated to database");
    },
  },

  setup() {
    const layout = {
      wrapperCol: {
        span: 4,
      },
    };

    return {
      layout,
    };
  },
});
</script>

<style scoped>
.container {
  padding-top: 55px;
  padding-left: 25px;
  padding-right: 25px;
  text-align: center;
}
</style>