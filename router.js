import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { LoginScreen } from "./Screens/auth/LoginScreen";
import { RegistrationScreen } from "./Screens/auth/RegistrationScreen";
import { PostsScreen } from "./Screens/mainScreens/PostsScreen";
import { CreatePostsScreen } from "./Screens/mainScreens/CreatePostsScreen";
import { ProfileScreen } from "./Screens/mainScreens/ProfileScreen";
import { View } from "react-native-web";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLable: false,
        tabBarStyle:{
          display:"flex",
          justifyContent: "center", 
          height:83,
  }
      }}
    >
      <MainTab.Screen
        name="Home"
        component={PostsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (!focused) {
              return <AntDesign name="appstore-o" size={24} color="rgba(33, 33, 33, 0.8)" />;
            }
            return (
              <View style={styles.container}>
                <AntDesign name="appstore-o" size={24} color="#FFF" />;
              </View>
            );
          },
        }}
      />
      <MainTab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (!focused) {
              return <Feather name="plus" size={24} color="rgba(33, 33, 33, 0.8)" />;
            }
            return (
              <View style={styles.container}>
                <Feather name="plus" size={24} color="#fff" />;
              </View>
            );
          },
        }}
      />
      <MainTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (!focused) {
              return <Feather name="user" size={24} color="rgba(33, 33, 33, 0.8)" />;
            }
            return (
              <View style={styles.container}>
                <Feather name="user" size={24} color="#fff" />;
              </View>
            );
          },
        }}
      />
    </MainTab.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:100,
    backgroundColor:"#FF6C00",
    width: 70,
    height: 40,
  },
})