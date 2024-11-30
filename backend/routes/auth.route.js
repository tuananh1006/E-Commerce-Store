import express from "express";
import {
  HandleLoginPage,
  HandleRegisterPage,
  handleLogoutPage,
} from "../controllers/auth.controller.js";
const router = express.Router();

router.get("/login", HandleLoginPage);
router.get("/register", HandleRegisterPage);
router.get("/logout", handleLogoutPage);
export default router;
