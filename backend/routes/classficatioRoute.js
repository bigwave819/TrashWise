import express from "express";
import { createClassification, getUserClassifications } from "../controllers/classfication.controller.js";

const router = express.Router();

router.post("/", createClassification);
router.get("/:userId", getUserClassifications);

export default router;