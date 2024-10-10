import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button, useColorScheme, Pressable, SafeAreaView } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export const DownloadWallpaper = ({onClose, wallpapper}:{
    onClose:()=>void;  //the onClose function is get as param and it is assigned as callBack to the onClose event on the bottomSheet
    wallpapper:Wallpaper
  }) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);  
  }, []);
  const theme = useColorScheme() ?? "light";

  // renders
  return (
      <BottomSheet
      onClose={onClose}
      snapPoints={["99%"]}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        handleIndicatorStyle={{height:0}}
        handleStyle={{display:"none"}}
      >
        <BottomSheetView style={styles.contentContainer}>
          <ThemedView style={{flex:1}}>
          <Image style={styles.image} source={{uri:wallpapper.url}}/>
          <View style={styles.closeBar}>
            <Pressable onPress={onClose}>
              <Ionicons name={"close"} size={24} color={theme === "light" ? Colors.light.text:Colors.dark.text}></Ionicons>
            </Pressable>
            <View style={styles.funtionBar}>
              <Ionicons name={"heart"} size={24} color={theme === "light" ? Colors.light.text:Colors.dark.text}></Ionicons>
              <Ionicons name={"share"} size={24} style={{paddingLeft:4}} color={theme === "light" ? Colors.light.text:Colors.dark.text}></Ionicons>
            </View>
          </View>
          <ThemedView>
            <ThemedText style={styles.nameContainer}>{wallpapper.name}</ThemedText>
          </ThemedView>
          <DownloadButton/>
          </ThemedView>
        </BottomSheetView>
      </BottomSheet>
  );
};

function DownloadButton (){
  const theme = useColorScheme() ?? "light";
  return <Pressable onPress={()=> console.log("Pressed")} style={[styles.buttonContainer,{backgroundColor: theme === "light" ? "white" : "black", borderWidth:1, borderColor:theme === "light" ? "black":"white"}]}>
      <Ionicons name={"download"} size={24} style={{paddingRight:6}} color={theme === "light" ? Colors.light.text:Colors.dark.icon}></Ionicons>
      <ThemedText style={styles.buttonText}>Get Wallpaper</ThemedText>
  </Pressable>
}

const styles = StyleSheet.create({
  buttonContainer:{
    marginTop:20,
    marginLeft:30,
    marginRight:30,
    borderRadius:10,
    padding:10,
    flexDirection:"row",
    justifyContent:"center",
  },
  buttonText:{
    fontSize:20,
    fontWeight:"500",
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  image:{
    height:"65%",
    borderRadius:8
  },closeBar:{
    paddingTop:30,
    position:"absolute",
    display:"flex",
    padding:10,
    justifyContent:"space-between",
    width:"100%",
    flexDirection:"row"
  },funtionBar:{
    display:"flex",
    flexDirection:"row",
  },
  nameContainer:{
    textAlign:"center",
    display:"flex",
    fontSize:30,
    paddingTop:24,
    fontWeight:500,
    width:"100%",
  }
});