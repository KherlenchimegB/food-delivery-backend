import { Request, Response } from "express";
import { User } from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
  try {
    const { email, password } = request.body;
    const user = await User.findOne({ email });

    const comparedPassword = bcrypt.compare(password, user?.password || "");

    const token = jwt.sign({ userId: user?._id || "" }, "pinecone-test", {
      expiresIn: "1h",
    });

    if (!comparedPassword) {
      response.status(200).json({
        success: true,
        message: "not authenticated",
      });
    }
    response.status(200).json({
      success: false,
      message: "Authenticated",
      token: token,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const signUp = async (request: Request, response: Response) => {
  const { email, password } = request.body;
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const hashedPassword = await bcrypt.hash(password, salt);

    const createdUser = await User.create({
      email: email,
      password: hashedPassword,
    });

    response.status(200).json({
      success: true,
      data: createdUser,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const resetPasswordRequest = (request: Request, response: Response) => {
  response.send("auth/resetPassword huselt irlee");
};

export const verifyResetPasswordRequest = async (
  request: Request,
  response: Response
) => {
  try {
    const { email, password } = request.body;
    const user = await User.findOne({ email });

    const validPassword = bcrypt.compare(password, user?.password);

    if (validPassword) {
      response.status(200).json({
        success: true,
        message: "Authenticated",
        isVerified: true,
      });
    }
    response.status(200).json({
      success: false,
      message: "not authenticated",
      isVerified: false,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }

  response.send("auth/ verifyResetPasswordRrequest huselt irlee");
};
export const resetPassword = async (request: Request, response: Response) => {
  try {
    const { email, password, newPassword } = request.body;
    const user = await User.findOne({ email });
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    bcrypt.compare(password, user?.password, (err, result) => {
      if (result) {
        bcrypt.hash(newPassword, salt, async (err, hash) => {
          const { userId } = request.params;
          const updatedUser = await User.findByIdAndUpdate(
            userId,
            newPassword,
            {
              new: true,
            }
          );
          response.json({ success: true, data: updatedUser });

          response.status(200).json({
            success: true,
            data: updatedUser,
          });
        });

        response.status(200).json({
          success: true,
          message: "Authenticated",
        });
      } else {
        response.status(200).json({
          success: false,
          message: "not authenticated",
        });
      }
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }

  response.send("auth/ resetPassword huselt irlee");
};
