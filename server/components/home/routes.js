import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/", controller.verifyUnauthentication);

export default router;
