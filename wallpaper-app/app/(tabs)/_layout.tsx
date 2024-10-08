import React from "react";
import {  Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Layout() {
  return (
    //   <SafeAreaView>
    //     <View>
    //         <Link href={"/"}><Text>ForYou Page</Text></Link>
    //         <Link href={"/explore"}><Text>Explore Page</Text></Link>
    //         <Link href={"/account"}><Text>Account Page</Text></Link>
    //     </View>
    //     <Slot/>
    //   </SafeAreaView>
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue',headerShown:false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'For You',
          tabBarIcon: ({ color }:any) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }:any) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }:any) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}