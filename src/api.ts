import express from "express";
import { PORT, DBURL } from "./config";
import { Favorite } from "./models/Favorite";
import { Simulator } from "./models/Simulator";
import { Profile } from "./models/Profile";

const app = express();

const mongoose = require("mongoose");
mongoose
  .connect(`${DBURL}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to DB ${DBURL}`);
  });

app.get("/api/profile", async (req, res) => {
  const profileRoute = await Profile.find().lean();
  res.json({ profileRoute });
});

// app.get("/api/profile_id", async (req, res) => {
//   const { profileId } = req.params;
//   let query = {};
//   if (profileId !== "undefined") {
//     query = { profileId };
//   }
//   console.log(query);
//   const clients = await Profile.find(query);
//   res.json(clients);
// });

app.get("/favorite/:favoriteId", async (req, res) => {
  console.log(req.params);
  const data = { title: "SOCIOS" };
  res.json(data);
});

app.get("/api/favorite", async (req, res) => {
  const favoriteRoute = await Favorite.find().lean();
  res.json({ favoriteRoute });
});

app.get("/api/simulator", async (req, res) => {
  const simulatorRoute = await Simulator.find().lean();
  res.json({ simulatorRoute });
});

app.listen(PORT, () =>
  console.log(`✅  Ready on port http://localhost:${PORT}`)
);
