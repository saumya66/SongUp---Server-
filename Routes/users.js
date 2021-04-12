import express from "express";
import { signIn, signUp } from "../Controllers/users.js";

const router = express.Router();

router.post("/signin", signIn);
router.post("/signup", signUp);

export default router;
