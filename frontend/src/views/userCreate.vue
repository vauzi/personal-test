<template>
  <router-link to="/" class="btn btn-success">Back</router-link>
  <h5 class="card-title my-4 text-center">Form Tambah Data Baru</h5>

  <form @submit.prevent="createData">
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">
        Nama Lengkap
      </label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          placeholder="Masukkan Nama Lengkap"
          v-model="data.nama_lengkap"
        />
      </div>
    </div>

    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label">
        No. Hp
      </label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          placeholder="Masukkan Nomor HP"
          v-model="data.no_hp"
        />
      </div>
    </div>

    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label">
        Email
      </label>
      <div class="col-sm-10">
        <input
          type="email"
          class="form-control"
          placeholder="Masukkan Email"
          v-model="data.email"
        />
      </div>
    </div>

    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label">
        Alamat
      </label>
      <div class="col-sm-10">
        <textarea
          class="form-control"
          rows="3"
          placeholder="Masukkan Alamat Lengkap"
          v-model="data.alamat"
        ></textarea>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Simpan</button>
  </form>
</template>

<script>
import { reactive } from "vue";
import { useUser } from "../stores/user.js";
export default {
  setup() {
    const data = reactive({
      nama_lengkap: "",
      no_hp: "",
      email: "",
      alamat: "",
    });

    const store = useUser();

    const createData = () => {
      store.userPost(data);
    };
    return {
      data,
      createData,
    };
  },
};
</script>
