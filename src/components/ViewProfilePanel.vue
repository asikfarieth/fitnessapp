<template>
  <div class="container">
    <!-- Page Icon -->
    <a-avatar :size="140">
      <template #icon><UserOutlined /></template>
    </a-avatar>
    <!-- User Information -->
    <a-descriptions title="User Profile" bordered :column="{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }">
      <a-descriptions-item label=" Full Name">{{ name }}</a-descriptions-item>
      <a-descriptions-item label="Age">{{ age }}</a-descriptions-item>
      <a-descriptions-item label="Height">{{ height }} cm</a-descriptions-item>
      <a-descriptions-item label="Weight">{{ weight }} kg</a-descriptions-item>
      <a-descriptions-item label="Fitness Goal">{{ fitness_goals }}</a-descriptions-item>
    </a-descriptions>
    <br />

    <!-- Edit Button -->
    <a-form-item justify="center">
      <a-button @click="edit" type="primary">Edit</a-button>
    </a-form-item>
  </div>
</template>

<script>
import { UserOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useRouter } from "vue-router";
import db from "@/firebase";

export default defineComponent({
  components: {
    UserOutlined,
  },

  data() {
    return {
      name: "",
      age: "",
      height: "",
      weight: "",
      fitness_goals: "",
    };
  },

  created() {
    this.getUserInfo();
  },

  methods: {
    //Get user info data from database
    async getUserInfo() {
      const docSnap = await getDoc(doc(db, "Users", getAuth().currentUser.uid));

      if (docSnap.exists()) {
        // Assign document fields to data properties
        this.name = docSnap.data().name;
        this.age = docSnap.data().age;
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
    // Get reference to vue router
    const router = useRouter();

    // Direct to update profile page
    const edit = () => {
      router.push("/update-profile");
    };

    return {
      edit,
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