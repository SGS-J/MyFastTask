import { Router } from "express";
import controller from "./controller";

const router = Router();

router.get('/:id', controller.getTask)
router.get('/', controller.getAllTasks)
router.post('/', controller.createTask)
router.put('/:id', controller.updateTask)
router.delete('/:id', controller.removeTask)

export default router;