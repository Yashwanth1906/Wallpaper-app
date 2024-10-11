import { PrismaClient } from "@prisma/client";


const prisma =new PrismaClient();

export const addWallpappers = async(req,res)=>{
    try{
        const {name,image,artist,resolution,type} = req.body;
        const newWallpaper = await prisma.wallpaper.create({
            data:{
                name,
                image,
                artist,resolution,type
            }
        })
        res.status(200).send(newWallpaper);
    }
    catch(e){
        console.log(e);
        res.status(500).send(e);
    }
}

export const getWallpappers = async(req,res)=>{
    try{
        const wallpappers = await prisma.wallpaper.findMany({});
        res.status(200).send(wallpappers);
    }catch(er){
        console.log(er);
        res.status(500).send(er);
    }
}