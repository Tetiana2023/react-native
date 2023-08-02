import { useState } from "react";
import PhotoBG from "../../assets/img/PhotoBG.png";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export const RegistrationScreen = ({ navigation }) => {
  console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [activeInput, setActiveInput] = useState("");
  // const image = {
  //   uri: "https://faktypro.com.ua/uploads/img/11-cikavih-faktiv-pro-gori.jpg",
  // };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <ImageBackground style={styles.image} source={PhotoBG}>
          <View style={{ ...styles.form, flex: isShowKeyboard ? 0.5 : 0.65 }}>
            <View style={styles.avatarWrapper}>
              <Image style={styles.avatarImg} />
              <View style={styles.addAvatarButton}>
                <Text style={styles.AddAvatarBtnText}>+</Text>
              </View>
            </View>
            <Text style={styles.text}>Реєстрація</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View>
                <View>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor:
                        activeInput === "login" ? "#FF6C00" : "#f6f6f6",
                    }}
                    value={state.login}
                    placeholder="Логін"
                    placeholderTextColor="#BDBDBD"
                    onFocus={() => setIsShowKeyboard(true)}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, login: value }))
                    }
                  />
                </View>
                <View style={{ marginTop: 16, marginBottom: 16 }}>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor:
                        activeInput === "email" ? "#FF6C00" : "#f6f6f6",
                    }}
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
                    style={{
                      ...styles.input,
                      borderColor:
                        activeInput === "password" ? "#FF6C00" : "#f6f6f6",
                    }}
                    value={state.password}
                    placeholder="Пароль"
                    secureTextEntry={true}
                    placeholderTextColor="#BDBDBD"
                    onFocus={() => setIsShowKeyboard(true)}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
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
              <Text style={styles.btnTitle}>Зареєструватися</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text style={styles.finishText}>
                Вже є акаунт?
                <Text style={styles.finishText}>Увійти</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
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
    marginBottom: 33,
    marginTop: 54,
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
    height: 489,
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
