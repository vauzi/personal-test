import express from 'express';
import {
  getUser,
  showUser,
  userStore,
  userUpdate,
  userDelete,
} from '../app/controller/userController.js';

const router = express.Router();

router.get('/users', getUser);
router.get('/users/:id', showUser);
router.post('/users', userStore);
router.patch('/users/:id', userUpdate);
router.delete('/users/:id', userDelete);

export default router;
