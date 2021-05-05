import express from "express";

export const router = express.Router();

router.get("/favorite", (req, res) => {
  const data = { title: "FAVORITE" };
  res.json(data);
});
