import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";


import { useRoute } from "./router";

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
    <NavigationContainer>
     {routing}
    </NavigationContainer>
  );
}


