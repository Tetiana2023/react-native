import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { useFonts } from "expo-font";

import {Provider} from 'react-redux';
import { useRoute } from "./router";
import { store } from "./redux1/store";

import db from './firebase/config';

export default function App() {
  // console.log(Platform.OS);

  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
  });
  const [user, setUser] = useState(null);

  db.auth().onAuthStateChanged((user)=>console.log(user) )
  const routing = useRoute(user);
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
     {routing}
    </NavigationContainer>
    </Provider>
    
  );
}


