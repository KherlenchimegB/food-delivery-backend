import { Request, Response } from "express";
import { User } from "../models/user.models.js";
import mongoose from "mongoose";

export const refresh = async (request: Request, response: Response) => {
  try {
    const user = await User.find();
    response.json({ success: true, data: user });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const signIn = async (request: Request, response: Response) => {
  response.send("auth/:signIn Get huselt irlee");
};

export const signUp = async (request: Request, response: Response) => {
  try {
    const createdUser = request.body;
    const user = await User.create({
      ...createdUser,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    await User.validate({ email: null }, ["email"]);
    response.json({ success: true, data: user });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
    error instanceof mongoose.Error.ValidationError;
    Object.keys(error.errors);
  }
  response.send("auth/ signUp huselt irlee");
};

export const resetPasswordRrequest = (request: Request, response: Response) => {
  response.send("auth/resetPassword huselt irlee");
};

export const verifyResetPasswordRrequest = (
  equest: Request,
  response: Response
) => {
  response.send("auth/ verifyResetPasswordRrequest huselt irlee");
};
export const resetPassword = async (request: Request, response: Response) => {
  try {
    const updatedPassword = request.body;
    const category = await User.findOneAndReplace(updatedPassword, {
      new: true,
    });

    response.json({ success: true, data: category });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
  response.send("auth/ resetPassword huselt irlee");
};
