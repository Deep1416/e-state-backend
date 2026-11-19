import express from "express";
import { login, logout, register } from "../controllers/auth.controllers.js";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

export default router;
