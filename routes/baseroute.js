import { Router } from "express";
import controller from "../api/Auth/controller.js";
const router = Router()

router.get('/',controller.welcome);

router.post('/register',controller.register)
router.post('/login',controller.login)

export default router