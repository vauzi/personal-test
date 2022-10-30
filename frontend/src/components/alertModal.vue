<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content bg-warning">
        <!-- <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Peringatan</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div> -->
        <div class="modal-body">
          <h3>Peringatan</h3>
          <p>Apakah Yakin ingin mengahpus data?</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="submit"
            @click="deleted(dataId)"
            data-bs-dismiss="modal"
            class="btn btn-danger"
          >
            Oke
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUser } from "@/stores/user.js";
import { computed } from "@vue/runtime-core";
export default {
  setup() {
    const store = useUser();
    const dataId = computed(() => store.detailData);
    const deleted = (id) => {
      store.userDeleted(id);
    };
    return {
      deleted,
      dataId,
    };
  },
};
</script>