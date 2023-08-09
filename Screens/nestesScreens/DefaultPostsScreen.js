import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
// import { SectionListComponent } from "react-native/types";
import { Feather } from "@expo/vector-icons";

import ExitBtn from "../../assets/img/log-out.png";

export const DefaultPostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  console.log("route.params", route.params);
  useEffect(() => {
    if (route.params) setPosts((prevState) => [...prevState, route.params]);
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
            <View
              style={{marginHorizontal: 16, marginBottom: 15, marginTop: 32 }}
            >
              <Image
                source={{ uri: item.photo }}
                style={{ height: 240, borderRadius: 8, }}
              />
              <View>
                <Text style={styles.title}>{item.photoName}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 8,
                }}
              >
                <TouchableOpacity
                  onPress={()=> navigation.navigate("Коментарі", {id: item.id,
                    photo: item.photo,
                  })}
                >
                  <Feather name="message-circle" size={24} color="#BDBDBD" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={()=> navigation.navigate("Мапи", {
                    location: item.location,
                  })}
                >
                  <Feather name="map-pin" size={24} color="#BDBDBD" />
                  <Text>{item.photoLocation}</Text>
                </TouchableOpacity>
              </View>
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
    // fontFamily: "Roboto",
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
  title: {
    color: "#212121",
    // fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 500,
    
  },
});
