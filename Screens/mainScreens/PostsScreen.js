import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   FlatList,
// } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultPostsScreen } from "../nestesScreens/DefaultPostsScreen";
import { CommentsScreen } from "../nestesScreens/CommentsScreen";
import { MapScreen } from '../nestesScreens/MapScreen';

const NestedScreen = createNativeStackNavigator();

export const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultPostsScreen}
      />
      <NestedScreen.Screen
        name="Коментарі"
        component={CommentsScreen}
      />
      <NestedScreen.Screen
        name="Карти"
        component={MapScreen}
      />
    </NestedScreen.Navigator>
  );
};
