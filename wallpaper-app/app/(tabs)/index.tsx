import { DownloadWallpaper } from "@/components/BottomSheet";
import ImageCard from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { SplitView } from "@/components/splitView";
import { ThemedView } from "@/components/ThemedView";
import useWallpapers, { Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function explore(){
    const wallpapers = useWallpapers();
    return<SafeAreaView style={styles.mainContainer}>
        
        {/* <ParallaxScrollView headerBackgroundColor={{dark:"black",light:'white'}} headerImage={<Image style={{flex:1}}source={{uri:wallpapers[0].url}}/>}>  */}
            <SplitView wallpapers={wallpapers}></SplitView>
        {/* </ParallaxScrollView> */}

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