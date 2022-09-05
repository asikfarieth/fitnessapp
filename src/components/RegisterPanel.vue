<template>
  <div class="container">
    <!-- App Icon -->
    <a-image
      :width="200"
      :height="200"
      :src="require('../assets/dumbbell.png')"
      :preview="false"
    />

    <!-- Title Name  -->
    <h1>Create an Account</h1>

    <a-form v-bind="layout">
      <!-- Email Form  -->
      <a-form-item justify="center">
        <a-input placeholder="Email Address" v-model:value="email">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
        <span style="color: red" v-if="msg.email">{{ msg.email }}</span>
      </a-form-item>

      <!-- Password Form  -->
      <a-form-item justify="center">
        <a-input-password
          placeholder="Password"
          v-model:value="password"
          autocomplete="off"
        >
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
        <span style="color: red" v-if="msg.password">{{ msg.password }}</span>
      </a-form-item>

      <!-- Sign Up Button  -->
      <a-form-item justify="center">
        <a-button @click="register" type="primary" block>Sign Up</a-button>
      </a-form-item>

      <!-- Form Error Message -->
      <p style="color: red" v-if="errMsg">{{ errMsg }}</p>

      <!-- Route to Login Page  -->
      <p>Have an account? <router-link to="/login">Login Here</router-link></p>
    </a-form>
  </div>
</template>

<script>
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  data() {
    return {
      msg: [],
    };
  },

  watch: {
    email(value) {
      // Binding this to the data value in the email input
      this.email = value;
      this.validateEmail(value);
    },

    password(value) {
      // Binding this to the data value in the password input
      this.password = value;
      this.validatePassword(value);
    },
  },

  methods: {
    // Function to validate email input
    validateEmail(value) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "Invalid Email Address";
      }
    },
    // Function to validate password input
    validatePassword(value) {
      let difference = 6 - value.length;
      if (value.length < 6) {
        this.msg["password"] =
          "Must be at least 6 characters! " + difference + " characters left";
      } else {
        this.msg["password"] = "";
      }
    },
  },

  components: {
    UserOutlined,
    LockOutlined,
  },

  setup() {
    // Get user info
    const email = ref("");
    const password = ref("");

    // Get reference to vue router
    const router = useRouter();

    const errMsg = ref(""); // Error Message

    // Sign up the user
    const register = () => {
      createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
          console.log("Successfully registered!");

          router.push("/login");
        })
        .catch((error) => {
          console.log(error.code);
          // Display different error messages
          switch (error.code) {
            case "auth/email-already-in-use":
              errMsg.value = "Email already in use.";
              break;
            case "auth/missing-email":
              errMsg.value = "Missing email.";
              break;
            case "auth/invalid-email":
              errMsg.value = "Invalid email input.";
              break;
            case "auth/internal-error":
              errMsg.value = "Missing password.";
              break;
            case "auth/weak-password":
              errMsg.value = "Password is weak.";
              break;
          }
        });
    };

    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 4,
      },
    };

    return {
      email,
      errMsg,
      layout,
      password,
      register,
    };
  },
});
</script>

<style scoped>
.container {
  padding-top: 60px;
  padding-left: 25px;
  padding-right: 25px;
  text-align: center;
}
</style>