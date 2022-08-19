<template>
  <div class="r-btn">
    <!-- Return Button -->
    <a-button @click="returnBack" shape="circle" size="large">
      <template #icon><RollbackOutlined /></template>
    </a-button>
  </div>
</template>

<script>
import { RollbackOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    RollbackOutlined,
  },

  setup() {
    // Get reference to vue router
    const router = useRouter();

    // Direct to home page
    const returnBack = () => {
      router.push("/");
    };

    return {
      returnBack,
    };
  },
});
</script>

<style>
.r-btn {
  padding-top: 10px;
  padding-left: 20px;
}
</style>