export interface Wallpaper{
    url:string,
    name:string,
    liked:boolean,
    library:boolean,
    suggested:boolean
}

export function useSuggestedWallpapers():Wallpaper[]{
    const wallpappers = useWallpapers();
    return wallpappers.filter(item => item.suggested);
}
export function useLikedWallpapers():Wallpaper[]{
    const wallpappers = useWallpapers();
    return wallpappers.filter(item => item.liked);
}

export function useLibraryWallpappers():Wallpaper[]{
    const wallpappers = useWallpapers();
    return wallpappers.filter(item => item.library);
}


export default function useWallpapers():Wallpaper[]{
    return [{
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/9REfltqeT1Cz2IJTohLS0g",
        "name":"Fantasy",
        "liked":true,
        "library":false,
        "suggested":true,
    },{
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/k_Tc0tszTe-gTgaSOaDFGA",
        "name":"Good Night",
        "liked":false,
        "library":true,
        "suggested":true,
    },{
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/KPLgsvfkQuqnXnOoGQUo9A",
        "name":"Alone",
        "liked":false,
        "library":false,
        "suggested":true,
    },{
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/E-V6ewNyQzOIsMafng93rA",
        "name":"The perfect Duo",
        "liked":true,
        "library":true,
        "suggested":true,
    },{
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/8pE5tcc1RKSuUF0_oW2oMA",
        "name":"The mighty",
        "liked":true,
        "library":false,
        "suggested":false,
    },{
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/9REfltqeT1Cz2IJTohLS0g",
        "name":"Fantasy1",
        "liked":false,
        "library":true,
        "suggested":true,
    },{
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/Vwacleg_RzaWbjPfxTuV8Q",
        "name":"Girl",
        "liked":false,
        "library":false,
        "suggested":true,
    },{
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/EU2_ImrYRQelc3i5OsqyHg",
        "name":"The Ninja Cat",
        "liked":true,
        "library":false,
        "suggested":false,
    },{
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/9Y760vqBTPqLqkz7XAfP7Q",
        "name":"Car",
        "liked":false,
        "library":false,
        "suggested":false,
    }
]
}