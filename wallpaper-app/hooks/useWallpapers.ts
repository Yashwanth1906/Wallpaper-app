import axios from "axios";
import { useEffect, useState } from "react"

export interface Wallpaper{
    id:string,
    image:string,
    name:string,
    likes:number,
    artist:string,
    resolution:string,
    type:string
}

// export function useSuggestedWallpapers():Wallpaper[]{
//     const wallpappers = useWallpapers();
//     return wallpappers.filter(item => item.suggested);
// }
// export function useLikedWallpapers():Wallpaper[]{
//     const wallpappers = useWallpapers();
//     return wallpappers.filter(item => item.liked);
// }

// export function useLibraryWallpappers():Wallpaper[]{
//     const wallpappers = useWallpapers();
//     return wallpappers.filter(item => item.library);
// }


export default function useWallpapers():Wallpaper[] | null{
    const [wallpappers,setWallpappers] = useState<Wallpaper[] | null>(null);
    useEffect(()=>{
        const response = axios.get("http://192.168.1.7:6969/api/wallpapper/get");
        response.then((data)=>{
            setWallpappers(data.data);
        })
    },[])
    return wallpappers
}