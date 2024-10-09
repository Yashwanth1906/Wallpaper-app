import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button, useColorScheme } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';

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
      snapPoints={["95%"]}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        handleIndicatorStyle={{height:0}}
        handleStyle={{display:"none"}}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Image style={styles.image} source={{uri:wallpapper.url}}/>
          <View style={styles.closeBar}>
            <Ionicons name={"close"} size={24} color={theme === "light" ? Colors.light.icon:Colors.dark.icon}></Ionicons>
            <View style={styles.funtionBar}>
              <Ionicons name={"heart"} size={24} color={theme === "light" ? Colors.light.icon:Colors.dark.icon}></Ionicons>
              <Ionicons name={"share"} size={24} style={{paddingLeft:4}} color={theme === "light" ? Colors.light.icon:Colors.dark.icon}></Ionicons>
            </View>
            
          </View>
          <Button title='Download'></Button>
        </BottomSheetView>
      </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  image:{
    height:"60%",
    borderRadius:15
  },closeBar:{
    position:"absolute",
    display:"flex",
    padding:10,
    justifyContent:"space-between",
    width:"100%",
    flexDirection:"row"
  },funtionBar:{
    display:"flex",
    flexDirection:"row",
  }
});