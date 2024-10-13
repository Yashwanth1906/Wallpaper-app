import { Wallpaper } from "../hooks/useWallpapers";
import { Image, View,StyleSheet, useColorScheme, Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../constants/Colors";
import React from "react";

export default function ImageCard({wallpaper,onPress}:{
    wallpaper:Wallpaper,
    onPress:any
}){
    const theme = useColorScheme()??'light'
    return <Pressable onPress={onPress}>
        <View>
            <Image source={{uri:wallpaper.image}} style={style.image}/>
            <View style={style.labelContainer}>
                <ThemedText style={style.label}>{wallpaper.name}</ThemedText>
                <View style={style.iconContainer}>
                    <Ionicons name={"heart"} size={18} color={theme == 'light' ? Colors.light.icon : Colors.dark.icon}></Ionicons>
                </View>
                
            </View>
        </View>
    </Pressable>
}

const style = StyleSheet.create({
    image:{
        flex:1,
        height:225,
        borderRadius:20,
    },label:{
        color:"white"
    },
    labelContainer:{
        backgroundColor:"rgba(0,0,0,0.3)",
        position:"absolute",
        bottom:0,
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        padding:5
    },iconContainer:{
        display:"flex",
        justifyContent:"center"
    }
})