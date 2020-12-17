import { Router } from 'express';
import userRouter from '../components/users/routes';
import taskRouter from '../components/tasks/routes';

const router = Router();

router.use('/user', userRouter);
router.use('/tasks', taskRouter);

export default router;
