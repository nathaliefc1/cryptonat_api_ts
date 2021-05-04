import mongoose from "mongoose";
import _ from "lodash";
import Profile from "./models/profile";
import Simulator from "./models/Simulator";
import Favorite from "./models/Favorite";
import { DBURL } from "../src/config";

(async () => {
  //conect to mongoDB
  mongoose.connect(DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    //drop colection
    await Profile.collection.drop();
    await Favorite.collection.drop();
    await Simulator.collection.drop();
  } catch (error) {
    console.log("⚠️  COLECTION NOT FOUND");
  }

  const favorite = new Favorite({
    profile_id: `A1234`,
    name: `Uma`,
    favorite1: `String`,
    favorite2: `String`,
    favorite3: `String`,
  });
  await favorite.save();

  const profile = new Profile({
    name: `String`,
    email: `String`,
    capital: `123`,
    divisa: `String`,
    prefered_cryptocurrency: `String`,
  });
  await profile.save();

  const simulator = new Simulator({
    profile_id: `String`,
    name: `String`,
    start_date: `01/05/2021`,
    check_date: `01/05/2021`,
    cryptocurrency: `String`,
    divisa: `String`,
    Crypto_price_start: `123`,
    Crypto_price_check: `123`,
  });
  await simulator.save();

  mongoose.disconnect();
})();
