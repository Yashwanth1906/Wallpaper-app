import { DownloadWallpaper } from "@/components/BottomSheet";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function account(){
    const [pictureOpen,setPictureOpen] = useState(false);
    return<SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
            <Text>Account Page</Text>
            <Link href={"/accountinfo"}><Text>go to account info</Text></Link>

            <Button title="Download Wallpaper" onPress={()=>setPictureOpen(true)}></Button>
            {pictureOpen && <DownloadWallpaper onClose={()=>setPictureOpen(false)}/>}   
        </View>
    </SafeAreaView>
}


//The onClose is a function which sets the state of setPictureOpen to false and it is passed as params to the DownWallpaper component
// the component gets it as param
