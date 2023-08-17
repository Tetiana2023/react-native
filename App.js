import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";

import {Provider} from 'react-redux';
import { useRoute } from "./router";
import { store } from "./Screens/redux/store";

export default function App() {
  // console.log(Platform.OS);
const routing = useRoute({})
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
  });
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


