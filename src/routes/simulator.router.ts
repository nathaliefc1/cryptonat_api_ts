import express from "express";
import { Router } from "express";
import { Simulator } from "../models/Simulator";
import cors from "cors";

const app = express();
app.use(cors());

export const router = express.Router();

router.get("/api/simulator", async (req, res) => {
  const simulator = await Simulator.find().lean();
  console.log(simulator);
  res.json({ simulator });
});

router.get("/api/simulator/:profile_id", async (req, res) => {
  console.log("========== ");
  let query = {};
  const { profile_id } = req.params;
  console.log({ profile_id });
  query = { profile_id };
  const data = await Simulator.find(query);
  res.json(data);
});

router.post("/api/simulator/:profile_id", async (req, res) => {
  const { profile_id } = req.params;
  const newData = {
    ...req.body,
    profile_id,
  };
  console.log(newData);
  const simulator = await Simulator.create(newData);
  res.json(simulator);
});
