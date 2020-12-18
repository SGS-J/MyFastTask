import { Router } from 'express';
import controller from './controller';

const router = Router();

router.get(
   '/:username/me',
   controller.verifyAuthentication,
   controller.getUser
);
router.patch(
   '/:username/me',
   controller.verifyAuthentication,
   controller.updateUser
);
router.post('/register', ...controller.addUser);
router.post('/login', ...controller.loginUser);

export default router;
