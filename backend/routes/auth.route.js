import express from "express";

const router = express.Router();

router.get("/login", (_req, res) => {
  res.send("Login page");
});

export default router;
