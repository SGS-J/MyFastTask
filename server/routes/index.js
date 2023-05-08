import { Router } from "express";
import userRouter from "../components/users/routes.js";
import taskRouter from "../components/tasks/routes.js";
import homeRouter from "../components/home/routes.js";

const router = Router();

router.use("/user", userRouter);
router.use("/user/:userEmail/tasks", taskRouter);
router.use("/home", homeRouter);

export default router;
