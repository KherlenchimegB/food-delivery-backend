import mongoose from "mongoose";

const { Schema, model } = mongoose;

const category = new Schema({
  categoryName: String,
  createdAt: Date,
  updatedAt: Date,
});

export const Category = model("Category", category);
