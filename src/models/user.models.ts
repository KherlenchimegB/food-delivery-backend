import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserRoleEnum = new Schema({
  role: {
    type: String,
    enum: ["User", "Admin"],
  },
});

const user = new Schema({
  email: String,
  password: String,
  phoneNumber: String,
  address: String,
  role: UserRoleEnum,
  isVerified: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

export const User = model("user", user);
