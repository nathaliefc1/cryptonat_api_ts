import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema({
  profile_id: String,
  name: String,
  favorite1: String,
  favorite2: String,
  favorite3: String,
});

export const Favorite = mongoose.model("Favorite", schema);
