import { DownloadWallpaper } from "@/components/BottomSheet";
import ImageCard from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import useWallpapers, { Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function explore(){
    const wallpapers = useWallpapers();
    const [selectedWallpaper,setSelectedWallpaper] = useState<null | Wallpaper>(null);
    return<SafeAreaView style={styles.mainContainer}>
        
        <ParallaxScrollView headerBackgroundColor={{dark:"black",light:'white'}} headerImage={<Image style={{flex:1}}source={{uri:wallpapers[0].url}}/>}> 
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <FlatList data={wallpapers.filter((_,index)=> index%2 === 0)} renderItem={({item}) =><View style={styles.imageContainer}><ImageCard wallpaper={item} onPress={()=>{
                        setSelectedWallpaper(item);
                    }}/></View>} keyExtractor={wallpapers => wallpapers.name}/>
                </View>
                <View style={styles.innerContainer}>
                    <FlatList data={wallpapers.filter((_,index)=>index%2 === 1)} renderItem={({item}) =><View style={styles.imageContainer}><ImageCard wallpaper={item} onPress={()=>{
                        setSelectedWallpaper(item);
                    }}/></View>} keyExtractor={wallpapers => wallpapers.name}/>
                </View>
            </View>
        </ParallaxScrollView>
        {selectedWallpaper && <DownloadWallpaper onClose={()=>setSelectedWallpaper(null)}  wallpapper={selectedWallpaper}/>}
    </SafeAreaView>
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