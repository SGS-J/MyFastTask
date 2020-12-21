import { Router } from 'express';
import controller from './controller';

const router = Router();

router.get(
   '/:username/me',
   controller.verifyAuthentication,
   controller.getUser
);
router.patch(
   '/:username/update',
   controller.verifyAuthentication,
   controller.updateUser
);
router.post('/register', ...controller.addUser);
router.post('/login', ...controller.loginUser);
router.get('/login', controller.getLoginPage);
router.post('/logout', controller.verifyAuthentication, controller.logoutUser);

export default router;
