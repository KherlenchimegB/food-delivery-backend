import { Request, Response } from "express";
import { User } from "../models/user.models.js";

export const refresh = (request: Request, response: Response) => {
  response.send("auth/ refresh huselt irlee");
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
    response.json({ success: true, data: user });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
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
export const resetPassword = (request: Request, response: Response) => {
  response.send("auth/ resetPassword huselt irlee");
};
