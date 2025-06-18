import { Request, Response } from "express";
import { Food } from "../models/index.js";

export const getAllFoods = async (request: Request, response: Response) => {
  try {
    const foods = await Food.find();
    response.json({ success: true, data: foods });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const getFoodByid = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const foodsById = await Food.findById(id);
    response.json({ success: true, data: foodsById });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const createFood = async (request: Request, response: Response) => {
  try {
    const { foodName, price, image, ingredients } = request.body;
    const createdFood = await Food.create({
      foodName: foodName,
      price: price,
      image: image,
      ingredients: ingredients,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    response.json({ success: true, data: createdFood });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const updateFood = async (request: Request, response: Response) => {
  try {
    const { foodName, price, image, ingredients } = request.body;
    const { id } = request.params;
    const createdFood = await Food.findByIdAndUpdate(
      {
        foodName: foodName,
        price: price,
        image: image,
        ingredients: ingredients,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      id
    );
    response.json({ success: true, data: createdFood });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
  // response.send("food/:foodId Patch huselt irlee");
};

export const deleteFood = (request: Request, response: Response) => {
  response.send("food/:foodId Delete huselt irlee");
};
