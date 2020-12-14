import { Router } from 'express';
import userRouter from '../components/users/routes';
import taskRouter from '../components/tasks/routes';

const router = Router();

router.use('/user', userRouter);
router.use('/user/tasks', taskRouter);

export default router;
