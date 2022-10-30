<template>
  <div class="mb-4">
    <h5 class="card-title">Tabel User</h5>
    <router-link to="create-user" class="btn btn-primary"
      >create New User</router-link
    >
  </div>
  <alert-modal></alert-modal>
  <alert-message></alert-message>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">No.</th>
        <th scope="col">Nama Lengkap</th>
        <th scope="col">Nomor Telepon</th>
        <th scope="col">Email</th>
        <th scope="col">Alamat</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) in users" :key="index">
        <td scope="row">{{ index + 1 }}</td>
        <td>{{ user.nama_lengkap }}</td>
        <td>{{ user.no_hp }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.alamat }}</td>
        <td class="d-flex item-center">
          <button
            @click="userShow(user.id)"
            type="button"
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { computed } from "vue";
import alertMessage from "@/components/alertMessage.vue";
import alertModal from "@/components/alertModal.vue";
import { useUser } from "@/stores/user.js";
export default {
  components: {
    alertMessage,
    alertModal,
  },

  setup() {
    //  menjalankan sotres/user.js
    const store = useUser();

    // menjalankan salah satu method stores. menampilakan semua data
    const data = () => {
      store.getData();
    };
    // menjalankan method data(load data)
    data();
    let numbering = 1;

    // variabel yang menampung data
    const users = computed(() => store.userData);
    const alert = computed(() => store.responseMessage);
    // if (alert) return data()

    // menjalankan method stores untuk melakakuan get detail data
    const userShow = (id) => {
      store.detailData = id;
    };

    return {
      data,
      userShow,
      users,
      alert,
      numbering,
    };
  },
};
</script>