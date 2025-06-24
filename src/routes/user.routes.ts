import express from "express";
import {
  refresh,
  signIn,
  signUp,
  resetPasswordRrequest,
  verifyResetPasswordRrequest,
  resetPassword,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/refresh", refresh);
userRouter.post("/sign-in", signIn);
userRouter.post("/sign-up", signUp);
userRouter.post("/reset-password-request", resetPasswordRrequest);
userRouter.get("/verify-reset-password-request", verifyResetPasswordRrequest);
userRouter.post("/reset-password", resetPassword);

export default userRouter;
