<template>
  <div
    class="alert alert-success alert-dismissible fade show"
    role="alert"
    v-show="alert"
  >
    <strong>{{ respon }}</strong>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
</template>
<script>
import { computed } from "vue";
import { useUser } from "@/stores/user.js";
export default {
  setup() {
    const store = useUser();
    const alert = computed(() => store.onMessage);
    const respon = computed(() => store.responseMessage);
    return {
      store,
      alert,
      respon,
    };
  },
};
</script>