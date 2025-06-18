import mongoose from "mongoose";

const { Schema, model } = mongoose;

const food = new Schema({
  foodName: String,
  price: Number,
  image: String,
  ingredients: String,
  createdAt: Date,
  updatedAt: Date,
});

export const Food = model("food", food);
