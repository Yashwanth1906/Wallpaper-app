import express from "express"
import { addWallpappers, getWallpappers } from "../Controllers/Wallpapers.js";

export const wallpapperRouter = express.Router();

wallpapperRouter.post("/add",addWallpappers);
wallpapperRouter.get("/get",getWallpappers);