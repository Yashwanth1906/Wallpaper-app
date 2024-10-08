import { GestureHandlerRootView } from "react-native-gesture-handler";
import {Stack} from "expo-router"

export default function Layout(){
    return <GestureHandlerRootView>
        <Stack screenOptions={{headerShown:false}}>        
            <Stack.Screen name="(nobottombar)/accountinfo" options={{headerShown:true,headerTitle:"Account Info"}}></Stack.Screen>
        </Stack>
    </GestureHandlerRootView>
}

//The Stack Router is used in the main Layout to put all the screens in stack and We can handle the Stack on each screen by 
// Stack.Screen and giving the name of the path of the page and manipulating as necessary