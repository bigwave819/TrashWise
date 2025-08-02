import { signUp, loginUser } from "../controllers/user.controller.js"
import express from "express"

const router = express.Router()

router.post("/signup", signUp);
router.post("/login", loginUser);

export default router;