import mongoose from "mongoose";

const { Schema, model, Types } = mongoose;

const user = new Schema(
  {
    email: { type: String, requered: true },
    password: { type: String, requered: true },
    phoneNumber: { type: String, requered: true },
    address: String,
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
    isVerified: Boolean,
  },
  { timestamps: true }
);

export const User = model("User", user);
