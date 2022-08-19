<template>
  <div class="s-btn">
    <!-- Setting Button -->
    <a-dropdown-button size="large">
      <template #overlay>
        <a-menu>
          <a-menu-item key="1" @click="handleViewProfile">
            <UserOutlined />
            View Profile
          </a-menu-item>
          <a-menu-item key="2" @click="handleUpdateProfile">
            <FormOutlined />
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
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { UserOutlined, LogoutOutlined, SettingOutlined, FormOutlined } from "@ant-design/icons-vue";
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    UserOutlined,
    LogoutOutlined,
    SettingOutlined,
    FormOutlined,
  },

  setup() {
    const isLoggedIn = ref(false);

    // Get reference to vue router
    const router = useRouter();

    // Check if user is logged in
    let auth;
    onMounted(() => {
      auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          isLoggedIn.value = true;
        } else {
          isLoggedIn.value = false;
        }
      });
    });

    // Direct to login page once signed out
    const handleSignOut = () => {
      signOut(auth).then(() => {
        router.push("/login");

        console.log("User signed out");
      });
    };

    // Direct to view profile page
    const handleViewProfile = () => {
      router.push("/view-profile");
    };

    // Direct to update profile page
    const handleUpdateProfile = () => {
      router.push("/update-profile");
    };

    return {
      handleSignOut,
      handleViewProfile,
      handleUpdateProfile,
      isLoggedIn,
    };
  },
});
</script>

<style scoped>
.s-btn {
  padding-top: 10px;
}
</style>