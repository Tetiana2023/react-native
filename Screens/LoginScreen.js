import { useState } from "react";
import PhotoBG from "./assets/img/PhotoBG.png";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useFonts } from "expo-font";

const initialState = {
  email: "",
  password: "",
};

export default function App() {
  console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

 const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state)
    setState(initialState);
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground style={styles.image} source={PhotoBG}>
        <View
          style={{ ...styles.container, flex: isShowKeyboard ? 0.5 : 0.65 }}
        >
          <Text style={styles.text}>Увійти</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View>
              <View style={{ marginTop: 16, marginBottom: 16 }}>
                <TextInput
                  style={{ ...styles.input }}
                  value={state.email}
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  value={state.password}
                  placeholder="Пароль"
                  secureTextEntry={true}
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
                <Text style={styles.showPassword}>Показати</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={keyboardHide}
          >
            <Text style={styles.btnTitle}>Увійти</Text>
          </TouchableOpacity>
          <Text style={styles.finishText}>
            Немає акаунту?
            <Text
              style={{ ...styles.finishText, textDecorationLine: "underline" }}
            >
              Зареєструватися
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
    width: "100%",
    height: 489,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    // justifyContent: "centre",
    resizeMode: "cover",
    alignItems: "center",
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    color: "black",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    // marginBottom: 33,
    // marginTop: 32,
  },
  input: {
    borderColor: "#E8E8E8",
    borderWidth: 1,
    width: 378,
    height: 50,
    backgroundColor: "#f6f6f6",
    borderRadius: 8,
    marginHorizontal: 16,
    color: "#212121",
    paddingLeft: 16,
  },
  form: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFF",
    position: "relative",
    width: "100%",
    height: 549,
  },
  button: {
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginTop: 43,
    width: 378,
    height: 51,
    paddingHorizontal: 32,
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  btnTitle: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
  },
  finishText: {
    color: "#1B4371",
    marginTop: 16,
    textAlign: "center",
    // font-family: Roboto;
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    // line-height: normal;
    marginBottom: 66,
  },
  showPassword: {
    // fontFamily: "roboto",
    position: "absolute",
    top: 16,
    right: 32,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  avatarWrapper: {
    top: -60,
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    zIndex: 999,
    marginHorizontal: 128,
  },
  avatarImg: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  addAvatarButton: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    bottom: 14,
    right: -13,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#FF6C00",
  },
  AddAvatarBtnText: {
    color: "#FF6C00",
    fontSize: 25,
    position: "absolute",
    top: -6,
  },
});
