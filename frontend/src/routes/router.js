import { createWebHistory, createRouter } from 'vue-router';

import userTable from '../views/userTable.vue';
import createUser from '../views/userCreate.vue';

const routes = [
  {
    path: '/',
    name: 'user',
    component: userTable,
  },
  {
    path: '/create-user',
    name: 'createUser',
    component: createUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
