<template>
  <div class="container">
    <!-- App Icon -->
    <a-image
      :width="200"
      :height="200"
      :src="require('../assets/dumbbell.png')"
      :preview="false"
    />

    <!-- App name -->
    <h1>SIM Fit</h1>

    <a-form v-bind="layout">
      <!-- Email Form -->
      <a-form-item justify="center">
        <a-input placeholder="Email Address" v-model:value="email">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <!-- Password Form -->
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
      </a-form-item>

      <!-- Login Button -->
      <a-form-item justify="center">
        <a-button @click="register" type="primary" block>Login</a-button>
      </a-form-item>

      <!-- Form Error Message -->
      <p style="color: red" v-if="errMsg">{{ errMsg }}</p>

      <!-- Route to Register Page  -->
      <p>
        Need an account? <router-link to="/register">Register Here</router-link>
      </p>

      <!-- Google Login Button -->
      <a-form-item justify="center">
        <a-button @click="signInWithGoogle">
          <template #icon><GoogleOutlined /></template>
          Login with Google
        </a-button>
      </a-form-item>

      <!-- Facebook Login Button -->
      <a-form-item justify="center">
        <a-button @click="signInWithFacebook">
          <template #icon><FacebookOutlined /></template>
          Login with Facebook
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import {
  UserOutlined,
  LockOutlined,
  GoogleOutlined,
  FacebookOutlined,
} from "@ant-design/icons-vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
    GoogleOutlined,
    FacebookOutlined,
  },

  setup() {
    // Get user info
    const email = ref("");
    const password = ref("");

    // Get reference to vue router
    const router = useRouter();

    const errMsg = ref(""); // Error Message

    // Login the user
    const register = () => {
      signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
          console.log("Successfully signed in!");
          // Direct to main page after login
          router.push("/tabs/home");
        })
        .catch((error) => {
          console.log(error.code);
          // Display different error messages
          switch (error.code) {
            case "auth/invalid-email":
              errMsg.value = "Invalid email.";
              break;
            case "auth/user-not-found":
              errMsg.value = "No account with that email was found.";
              break;
            case "auth/wrong-password":
              errMsg.value = "Incorrect password.";
              break;
            case "auth/too-many-requests":
              errMsg.value =
                "Unavailable beacuse of too many failed attempts.Try again later.";
              break;
            default:
              errMsg.value = "Email or password was incorrect.";
              break;
          }
        });
    };

    // Login via Google popup
    const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then(() => {
          console.log("Successfully signed in!");
          // Direct to main page after login
          router.push("/tabs/home");
        })
        .catch((error) => {
          console.log(error.code);
          // Display an error message
          switch (error.code) {
            case "auth/account-exists-with-different-credential":
              errMsg.value =
                "An account already exists with a different credential.";
              break;
          }
        });
    };

    // Login via Facebook popup
    const signInWithFacebook = () => {
      const provider = new FacebookAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then(() => {
          console.log("Successfully signed in!");
          // Direct to main page after login
          router.push("/tabs/home");
        })
        .catch((error) => {
          console.log(error.code);
          // Display an error message
          switch (error.code) {
            case "auth/account-exists-with-different-credential":
              errMsg.value =
                "An account already exists with a different credential.";
              break;
          }
        });
    };

    const layout = {
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
      signInWithFacebook,
      signInWithGoogle,
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