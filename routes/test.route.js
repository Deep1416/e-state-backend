import express from "express";
import { shouldBeAdmin, shouldBeLoggedIn } from "../controllers/test.controllers.js";

const router = express.Router();

router.get("/should-be-logged-in", shouldBeLoggedIn, (req, res) => {
  res.status(200).json({ message: "You are authenticated" });
});

router.get("/should-be-admin", shouldBeLoggedIn, shouldBeAdmin, (req, res) => {
  res.status(200).json({ message: "You are an admin" });
});

export default router;
