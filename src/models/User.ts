import mongoose from 'mongoose';

  const { Schema } = mongoose;

  const schema = new Schema({
    cuenta: String,
    name:  String, 
    email: String,
    preferred_crypto: String
  });

  export const User = mongoose.model('User', schema);