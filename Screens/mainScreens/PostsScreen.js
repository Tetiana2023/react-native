import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

// import ExitBtn from "../../assets/img/log-out.png";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
            <Text> PostsScreen</Text>
        </View>

//    <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}> Публікації</Text>
//         <TouchableOpacity style={styles.exitBtn}>
//           onPress={}
//           <Image 
//            style={styles.exitIcon}
//           source={ExitBtn} />
//         </TouchableOpacity>
//       </View>
//     </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
justifyContent: "center"
  },
  headerTitle: {
fontSize: 20,
  },
  exitBtn:{
    width: 24,
    height: 24,
  }, 
  exitIcon:{
    width: 24,
    height: 24,
  }
});
