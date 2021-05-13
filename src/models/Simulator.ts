import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema(
  {
    profile_id: String,
    startDate: Date,
    checkDate: Date,
    cryptocurrency: String,
    euros: String,
    CryptoPriceStart: Number,
    CryptoPriceCheck: Number,
  },
  {
    timestamps: true,
  }
);

export const Simulator = mongoose.model("Simulator", schema);
