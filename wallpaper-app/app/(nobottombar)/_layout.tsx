import { Link, Slot } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout(){
    return <SafeAreaView>
        <View style={{backgroundColor:"black"}}>
           <Link href={"/"}> <Text style={{color:"white"}}>
                Go Back
            </Text></Link>
        </View>
        <Slot/>
    </SafeAreaView>
}