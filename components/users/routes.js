import { Router } from "express";
import controller from "./controller";
import validation from "../../middleware/validator/user-validator";

const router = Router();

router.post('/register', ...controller.addUser)
router.get('/:username/me', ...controller.getUser)
router.get('/auth', ...controller.authUser)
router.get('/login', controller.loginUser)
router.patch('/:username/me', controller.updateUser)

export default router;