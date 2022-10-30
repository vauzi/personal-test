import axios from '@/lib/axios.js';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';

export const useUser = defineStore({
  id: 'users',
  state: () => ({
    userData: {},
    detailData: {},
    responseMessage: false,
    onMessage: false,
    router: useRouter(),
  }),

  actions: {
    //   server get all data
    async getData() {
      await axios
        .get('/users')
        .then((response) => {
          this.userData = response.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },

    // get detal data
    async showData(id) {
      await axios
        .get(`/users/${id}`)
        .then((response) => {
          this.detailData = response.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },

    // create data
    async userPost(data) {
      await axios.post('/users', data).then((response) => {
        this.onMessage = true;
        this.responseMessage = response.data.message;
        this.router.push({
          name: 'user',
        });
      });
    },

    // delete data
    async userDeleted(id) {
      await axios.delete(`/users/${id}`).then((response) => {
        this.onMessage = true;
        this.responseMessage = response.data.message;
        this.getData();
      });
    },
  },
});
