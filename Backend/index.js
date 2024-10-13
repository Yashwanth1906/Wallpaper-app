import express from "express"
import cors from "cors"
import { wallpapperRouter } from "./Routes/wallpaperRoute.js";
import { userRouter } from "./Routes/userRoute.js";
const app = express();
app.use(express.json())
app.use(cors());

app.listen(6969,()=>{
    console.log("Hello");
})

app.get("/api",(req,res)=>{
    console.log("Get Method Called")
    res.send("Hello React Native")
})

app.use("/api/wallpapper",wallpapperRouter);
app.use("/api/user",userRouter)