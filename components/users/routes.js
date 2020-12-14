import { Router } from "express";
import controller from "./controller";

const router = Router();

router.get('/:id', controller.getUser)
router.get('/login/:id', controller.authUser)
router.post('/register', controller.addUser)
router.patch('/', controller.updateUser)
router.delete('/', controller.removeUser)

export default router;