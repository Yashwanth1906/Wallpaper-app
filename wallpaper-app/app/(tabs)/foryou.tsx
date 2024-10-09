import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';   //The Tab have the Topbar functionality
const Tab = createMaterialTopTabNavigator();    //This is the external dependency we have installed to get the top navigator bar using react-native-navigation

export default function ForYou(){
    return(
                <Tab.Navigator>
                    <Tab.Screen name="Suggested" component={HomeScreen} />
                    <Tab.Screen name="Liked" component={SettingsScreen} />
                    <Tab.Screen name="Library" component={SettingsScreen} />
                </Tab.Navigator>
    )
}

function HomeScreen (){
    return <View>
        <Text>Hello World!!</Text>
    </View>
}

function SettingsScreen (){
    return <View>
        <Text>Hello World!!!!!!!</Text>
    </View>
}


// Liked,suggested,library