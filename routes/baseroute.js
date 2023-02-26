import { Router } from "express";
import authController from "../api/Auth/controller.js";
const router = Router()

router.get('/',authController.welcome);

router.post('/register',authController.register)
router.post('/login',authController.login)

export default router