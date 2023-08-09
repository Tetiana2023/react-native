import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image,  FlatList } from "react-native";


import ExitBtn from "../../assets/img/log-out.png";

export const DefaultPostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  console.log("route.params", route.params);
  useEffect(() => {
    if(route.params)
    setPosts((prevState) => [...prevState, route.params]);
  }, [route.params]);
  return (
    // <View style={styles.container}>
    //         <Text> PostsScreen</Text>
    //     </View>

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Публікації</Text>
        <TouchableOpacity style={styles.exitBtn}>
          <Image style={styles.exitIcon} source={ExitBtn} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Image source={{uri: item.photo}} style={{height: 240, marginHorizontal: 16}}/>
            </View>
         
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    height: 100,
    position: "relative",
    top: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 38,
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
  },
  headerTitle: {
    width: 97,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    textAlign: "center",
    color: "#212121",
  },
  exitBtn: {
    position: "absolute",
    top: 58,
    right: 12,
  },
  exitIcon: {
    width: 24,
    height: 24,
  },
});
