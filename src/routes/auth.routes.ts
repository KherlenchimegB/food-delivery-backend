import express from "express";
import {
  refresh,
  signIn,
  signUp,
  resetPasswordRrequest,
  verifyResetPasswordRrequest,
  resetPassword,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.get("/refresh", refresh);
authRouter.post("/sign-in", signIn);
authRouter.post("/sign-up", signUp);
authRouter.post("/reset-password-request", resetPasswordRrequest);
authRouter.get("/verify-reset-password-request", verifyResetPasswordRrequest);
authRouter.post("/reset-password", resetPassword);

export default authRouter;
