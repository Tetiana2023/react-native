import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground  style={styles.image}
      sourse={require('./assets/img/BG.jpg')}>
      <Text>Helo </Text>
     
      <StatusBar style="auto" />
       </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    alignItems:'center',

  }
});
