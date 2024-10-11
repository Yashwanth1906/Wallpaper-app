import { FlatList,StyleSheet, View } from "react-native";
import { Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import ImageCard from "./ImageCard";
import { DownloadWallpaper } from "./BottomSheet";
import ParallaxScrollView from "./ParallaxScrollView";
import { ThemedView } from "./ThemedView";

export function SplitView({wallpapers,onScroll}:{
    wallpapers:Wallpaper[] |null;
    onScroll : (yOffset: number) => void;
}){
    const [selectedWallpaper,setSelectedWallpaper] = useState<null | Wallpaper>(null);
    return <>
        <FlatList 
        onScroll={(e)=>{
            let yOffset = e.nativeEvent.contentOffset.y / 1;
        }}
        data={wallpapers?.filter((_,index) => index % 2 === 0).map((_,index) =>
            [wallpapers[index],wallpapers[index+1]]
        )}
        renderItem={({item:[first,second]})=><ThemedView style={styles.container}>
        <ThemedView style={styles.innerContainer}>
            <View style={styles.imageContainer}>
                <ImageCard onPress={()=>setSelectedWallpaper(first)} wallpaper={first}></ImageCard>
            </View>
        </ThemedView>
        {second && <ThemedView style={styles.innerContainer}>
            <View style={styles.imageContainer}>
                <ImageCard onPress={()=>setSelectedWallpaper(second)} wallpaper={second}></ImageCard>
            </View>
        </ThemedView>}    
    </ThemedView>
    }
    keyExtractor={item => item[0].name}
    />
        {selectedWallpaper && <DownloadWallpaper onClose={()=>setSelectedWallpaper(null)}  wallpapper={selectedWallpaper}/>}
    </>
}
const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:"white",
        flex:1
    },
    container:{
        flexDirection:"row",
        flex:1,
    },
    innerContainer:{
        flex:1,
        padding:5,
    },imageContainer:{
        paddingVertical:10
    }
})