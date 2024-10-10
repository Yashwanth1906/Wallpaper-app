import { DownloadWallpaper } from "@/components/BottomSheet";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, useColorScheme, View,Appearance, AppRegistry } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function account(){
    const [pictureOpen,setPictureOpen] = useState(false);
    const theme = useColorScheme() ?? "light";
    return<SafeAreaView style={{flex:1}}>
        <Header/>
        <ThemedView style={{flex:1}}>
            <LoginButtons/>
            <ThemeSelector/>
        </ThemedView>
    </SafeAreaView>
}

function ThemeSelector(){
    return <ThemedView style={styles.headerBar}>
        <ThemedText style={styles.headerTextTitle}>Settings</ThemedText>
        <ThemedText style={{marginTop:10}}>Theme</ThemedText>
        <ThemedView style={styles.ThemeSelectorContainer}>
            <ThemeButton title="System" selected={false} colorScheme={null}/>
            <ThemeButton title="Light" selected={false} colorScheme={"light"}/>
            <ThemeButton title="Dark" selected={true} colorScheme={"dark"}/>
        </ThemedView>
    </ThemedView>
}

function ThemeButton({title,selected,colorScheme}:{
    title:string,
    selected:boolean,
    colorScheme : "light" | "dark" | null,
}){
    const theme = useColorScheme() ?? "light";
    return <Pressable style={[styles.themeButtonPressable,{borderColor: theme === "light" ? Colors.light.text : Colors.dark.text}]} onPress={()=> Appearance.setColorScheme(colorScheme)}>
        <ThemedText style={{textAlign:"center",width:"100%"}}>{title}</ThemedText>
    </Pressable>
}

function LoginButtons(){
    const theme = useColorScheme();
    return <ThemedView style={{marginTop:10}}>
        <AuthButton icon={
            <Ionicons name={"logo-google"} size={24} style={{paddingRight:6}} color={theme === "light" ? Colors.light.text:Colors.dark.icon}></Ionicons>
            } label={"Sign In"}/>
            <AuthButton icon={
            <Ionicons name={"logo-apple"} size={24} style={{paddingRight:6}} color={theme === "light" ? Colors.light.text:Colors.dark.icon}></Ionicons>
            } label={"Sign In"}
        />
    </ThemedView>
}



function Header(){
    return <ThemedView style={styles.headerBar}>
        <ThemedText style={styles.headerTextTitle}>Panels</ThemedText>
        <ThemedText style={styles.headerText}>Sign in to save your data</ThemedText>
    </ThemedView>
}

function AuthButton ({icon,label}:{
    icon:any,
    label:string
}){
    const theme = useColorScheme() ?? "light";
    return <Pressable onPress={()=> console.log("Pressed")} style={[styles.buttonContainer,{backgroundColor:theme === "light" ? "white" : "black", borderColor: theme === "light" ? "black" : "white", borderWidth:1}]}>
        {icon}
        <ThemedText style={styles.buttonText}>{label}</ThemedText>
    </Pressable>
}

const styles = StyleSheet.create(
    {
    themeButtonPressable:{
        padding:10,
        flex:0.3,
        borderWidth:2,
        alignContent:"center",
        borderRadius:4,
    },
    ThemeSelectorContainer:{
        marginTop:15,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    ThemeSelectorChild:{
        flex:0.33,
    },
    headerBar:{
        padding:20
    },
    headerTextTitle:{
        fontWeight:"600",
        fontSize:25,
    },
    headerText:{
        fontSize:12
    },
    buttonContainer:{
      borderRadius:10,
      padding:10,
      marginHorizontal:40,
      marginVertical:5,
      flexDirection:"row",
      justifyContent:"center",
    },
    buttonText:{
      fontSize:20,
      fontWeight:"500",
    },
  });




//The onClose is a function which sets the state of setPictureOpen to false and it is passed as params to the DownWallpaper component
// the component gets it as param
