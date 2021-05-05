import express from "express";

export const router = express.Router();

router.get("/simulator", (req, res) => {
  const data = { title: "SIMULATOR" };
  res.json(data);
});
