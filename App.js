import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {} from "react-native";
import { useFonts } from "expo-font";
import { LoginScreen } from "./Screens/auth/LoginScreen";
import { RegistrationScreen } from "./Screens/auth/RegistrationScreen";

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export default function App() {
  // console.log(Platform.OS);
  // const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  // const [state, setState] = useState(initialState);

  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
     <MainTab.Navigator>
      <MainTab.Screen name="Home" component={PostsScreens}></MainTab.Screen>

     </MainTab.Navigator>
    </NavigationContainer>
  );
}

{/* AUTH

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
</AuthStack.Navigator> */}