import { SplitView } from "@/components/splitView";
import useWallpapers from "@/hooks/useWallpapers";
import {Dimensions, StyleSheet, View,Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from 'react-native-reanimated-carousel';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";

export default function explore(){
    const wallpapers = useWallpapers();
    const [yOffset,setYOffSet] = useState(0);
    const width = Dimensions.get('window').width
    return<SafeAreaView style={styles.mainContainer}>
        <ThemedView style={{height:300}}>
            <Carousel
                loop
                width={width}
                height={300 - yOffset}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <ThemedView
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <ThemedText style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </ThemedText>
                    </ThemedView>
                )}
            />
        </ThemedView>
            <SplitView onScroll={(yOffset)=>{
                setYOffSet(yOffset)
            }} wallpapers={wallpapers}></SplitView>
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