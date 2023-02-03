import { Router } from "express";
import { authController } from "../controllers/index.js";

const router = Router();

router.route('/login').get(authController.serverLogin).post();
router.route('/register').get().post();
router.route('/welcome').get();
router.route('/logout').get();

export default router;