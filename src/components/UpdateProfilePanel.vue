<template>
  <div class="container">
    <!-- Page Icon -->
    <a-avatar :size="140">
      <template #icon><FormOutlined /></template>
    </a-avatar>
    <a-form v-bind="layout">
      <!-- Name Form -->
      <a-form-item justify="center">
        <h3>Full Name</h3>
        <a-input v-model:value="name">{{ name }}</a-input>
        <br />
        <span style="color: red" v-if="msg.name">{{ msg.name }}</span>
      </a-form-item>

      <!-- Age Form -->
      <a-form-item justify="center">
        <h3>Age</h3>
        <a-input-number v-model:value="age">{{ age }}</a-input-number>
        <br />
        <span style="color: red" v-if="msg.age">{{ msg.age }}</span>
      </a-form-item>

      <!-- Height Form -->
      <a-form-item justify="center">
        <h3>Height</h3>
        <a-input-number v-model:value="height" addon-after="cm">{{
          height
        }}</a-input-number>
        <br />
        <span style="color: red" v-if="msg.height">{{ msg.height }}</span>
      </a-form-item>

      <!-- Weight Form -->
      <a-form-item justify="center">
        <h3>Weight</h3>
        <a-input-number v-model:value="weight" addon-after="kg">{{
          weight
        }}</a-input-number>
        <br />
        <span style="color: red" v-if="msg.weight">{{ msg.weight }}</span>
      </a-form-item>

      <!-- Fitness Goals Form -->
      <a-form-item justify="center">
        <h3>Fitness Goals</h3>
        <a-radio-group v-model:value="fitness_goals">
          <a-radio-button value="Gain Weight">Gain Weight</a-radio-button>
          <a-radio-button value="Maintain Weight">Maintain Weight</a-radio-button>
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
</template>

<script>
import { FormOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
import { doc, setDoc, getDoc } from "firebase/firestore";
import db from "@/firebase";
import { getAuth } from "firebase/auth";

export default defineComponent({
  components: {
    FormOutlined,
  },

  data() {
    return {
      name: "",
      age: "",
      height: "",
      weight: "",
      fitness_goals: "",
      msg: [],
    };
  },

  created() {
    this.getUserInfo();
  },

  watch: {
    name(value) {
      // Binding this to the data value in the name input
      this.name = value;
      this.validateName(value);
    },

    age(value) {
      // Binding this to the data value in the age input
      this.age = value;
      this.validateAge(value);
    },

    height(value) {
      // Binding this to the data value in the height input
      this.height = value;
      this.validateHeight(value);
    },

    weight(value) {
      // Binding this to the data value in the weight input
      this.weight = value;
      this.validateWeight(value);
    },
  },

  methods: {
    // Function to validate name input
    validateName(value) {
      if (/^[a-zA-Z]+( [a-zA-Z]+)+$/.test(value)) {
        this.msg["name"] = "";
      } else {
        this.msg["name"] = "User Full Name is required.";
      }
    },

    // Function to validate age input
    validateAge(value) {
      if (/^(?:1[4-9]|[2-9][0-9])$/.test(value)) {
        this.msg["age"] = "";
      } else {
        this.msg["age"] = "User Age must be 14 years or older.";
      }
    },

    // Function to validate height input
    validateHeight(value) {
      if (/^(10[0-9]|1[1-9][0-9]|200)(\.\d{1})$/.test(value)) {
        this.msg["height"] = "";
      } else {
        this.msg["height"] =
          "User Height must be between 100 and 200, with 1 decimal place.";
      }
    },

    // Function to validate weight input
    validateWeight(value) {
      if (/^(3[0-9]|[4-9][0-9]|1[01][0-9]|120)(\.\d{1,2})$/.test(value)) {
        this.msg["weight"] = "";
      } else {
        this.msg["weight"] =
          "User Weight must be between 30 and 120, up to 2 decimal places.";
      }
    },

    // Update user info to database
    async update() {
      await setDoc(doc(db, "Users", getAuth().currentUser.uid), this.$data);
      this.$router.push("/view-profile");
      console.log("User info is updated to database");
    },

    //Get user info data from database
    async getUserInfo() {
      const docSnap = await getDoc(doc(db, "Users", getAuth().currentUser.uid));

      if (docSnap.exists()) {
        // Assign document fields to data properties
        this.name = docSnap.data().name;
        this.age = docSnap.data().age;
        this.height = docSnap.data().height;
        this.weight = docSnap.data().weight;
        this.fitness_goals = docSnap.data().fitness_goals;
      } else {
        console.log("Document does not exist");
      }
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
  padding-top: 15px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 10px;
  text-align: center;
}
</style>