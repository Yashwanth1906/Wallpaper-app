import React from "react";
import {  Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";

export default function Layout() {
  const theme = useColorScheme()??"light";
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors[theme].tint,headerShown:false,
      tabBarStyle:{
        backgroundColor:Colors[theme].background
      }
     }}>
      <Tabs.Screen
        name="foryou"
        options={{
          title: 'ForYou',
          tabBarIcon: ({ color }:any) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }:any) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }:any) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      
    </Tabs>
  );
}

//In the Tabs.Screen , the name is used to route to the page and title is the name of the page that is shown in the bottom bar