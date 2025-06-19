import mongoose, { isObjectIdOrHexString } from "mongoose";

const { Schema, model } = mongoose;

const FoodOrderItem = new Schema({
  foodName: String,
  price: Number,
  countFood: Number,
  foodId: String,
  order_date: Date,
});

const FoodOrderStatusEnum = new Schema({
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
  },
});

const order = new Schema({
  totalPrice: Number,
  image: String,
  foodOrderItems: [FoodOrderItem],
  status: FoodOrderStatusEnum,
  createdAt: Date,
  updatedAt: Date,
});

export const Order = model("order", order);
