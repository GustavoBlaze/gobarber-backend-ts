import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

const router = Router();
const upload = multer(uploadConfig);
const usersController = new UsersController();
const userAvatarcontroller = new UserAvatarController();
router.post('/', usersController.create);

router.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarcontroller.update,
);

export default router;
