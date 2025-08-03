import { signUp, loginUser, updatePassword } from "../controllers/user.controller.js"
import express from "express"
import { protect } from "../middleware/auth.middleware.js"

const router = express.Router()

router.post("/signup", signUp);
router.post("/login", loginUser);
router.put("/edit", protect, updatePassword);

export default router;