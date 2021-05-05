import express from "express";

export const router = express.Router();

router.get("/profile", (req, res) => {
  const data = { title: "PROFILE" };
  res.json(data);
});
