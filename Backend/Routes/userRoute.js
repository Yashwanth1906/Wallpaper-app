import express from "express"
import { login, register } from "../Controllers/userController.js";

export const userRouter = express.Router();

userRouter.post("/register",register);
userRouter.post("/login",login)