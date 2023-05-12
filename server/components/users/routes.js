import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.all(
  /^\/\w{3,}\/(tasks\/*|update|logout)$/gi,
  controller.verifyAuthentication
);
router.get("/me", controller.getUser);
router.get(/^\/(login|register)$/, controller.confirmUnauthentication);
router.patch("/update", controller.updateUser);
router.post("/register", ...controller.addUser);
router.post("/login", ...controller.loginUser);
router.post("/logout", controller.logoutUser);

export default router;
