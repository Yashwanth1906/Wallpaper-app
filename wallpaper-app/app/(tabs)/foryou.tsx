import { Link } from "expo-router";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';   //The Tab have the Topbar functionality
import { SplitView } from "@/components/splitView";
import useWallpapers, { useLibraryWallpappers, useLikedWallpapers, useSuggestedWallpapers } from "@/hooks/useWallpapers";
import { ThemeProvider } from "@react-navigation/native";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
const Tab = createMaterialTopTabNavigator();    //This is the external dependency we have installed to get the top navigator bar using react-native-navigation

export default function ForYou(){
    const theme = useColorScheme() ?? "light";
    return(
        <SafeAreaView style={styles.container}>
            <ThemedView style={{
                height:90,
                justifyContent:"center",
                alignItems:"center"
            }}>
                <View style={styles.logoContainer}>
                    <Ionicons name="person-outline" size={50} style={{paddingRight:6}} color={theme === "light" ? Colors.light.text:Colors.dark.icon}></Ionicons>
                </View>
            </ThemedView>
            <Tab.Navigator style={{flex:1}} screenOptions={{
                tabBarActiveTintColor:Colors[theme].tint,
                tabBarStyle:{
                    backgroundColor : Colors[theme].background
                }
            }}>
                <Tab.Screen name="Suggested" component={SuggestedScreen} />
                <Tab.Screen name="Liked" component={LikedScreen} />
                <Tab.Screen name="Library" component={LibraryScreen} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}

function SuggestedScreen (){
    const wallpapers = useSuggestedWallpapers();
    return <ThemedView style={styles.container}>
        <SplitView wallpapers={wallpapers}/>
    </ThemedView>
}

function LikedScreen (){
    const wallpapers = useLikedWallpapers();
    return <ThemedView style={styles.container}>
        <SplitView wallpapers={wallpapers}/>
    </ThemedView>
}
function LibraryScreen(){
    const wallpapers = useLibraryWallpappers();
    return <ThemedView style={styles.container}>
        <SplitView wallpapers={wallpapers}/>
    </ThemedView>
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    logoContainer:{
        position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    }
})



// Liked,suggested,library