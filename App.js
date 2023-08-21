import React from "react";
import { StyleSheet } from "react-native";

import { useFonts } from "expo-font";
import {Provider} from 'react-redux';
import { store } from "./redux1/store";

import { Main } from "./Components/Main";


const  App = ()=>  {
  // console.log(Platform.OS);

  const [fontsLoaded] = useFonts({
    "Roboto": require("./assets/fonts/Roboto-Black.ttf"),
  });

    if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
     <Main/>
    </Provider>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;

