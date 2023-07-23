import {useState} from 'react';
import PhotoBG from './assets/img/PhotoBG.png'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView
} from "react-native";
import * as Font from 'expo-font';

const LoadApplication = async ()=>{
  await Font.loadAsync({})
}

export default function App() {
  console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  // const image = {
  //   uri: "https://faktypro.com.ua/uploads/img/11-cikavih-faktiv-pro-gori.jpg",
  // };
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={PhotoBG}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={{...styles.form, marginBottom: isShowKeyboard ? -120 : 20}}>
            <View style={styles.avatarWrapper}>

            </View>
            <Text style={styles.text}>Реєстрація</Text>
            <TextInput
              style={styles.input}
              placeholder="Логін"
              placeholderTextColor="#BDBDBD"
              onFocus={()=>setIsShowKeyboard(true)}
            />
            <View style={{ marginTop: 16, marginBottom: 16 }}>
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                placeholderTextColor="#BDBDBD"
                onFocus={()=>setIsShowKeyboard(true)}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
                placeholderTextColor="#BDBDBD"
                onFocus={()=>setIsShowKeyboard(true)}
              />
              <Text style={styles.showPassword}>Показати</Text>
            </View>

            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <Text style={styles.btnTitle}>Зареєструватися</Text>
            </TouchableOpacity>
            <Text style={styles.finishText}>Вже є акаунт? Увійти</Text>
          </View>
        </KeyboardAvoidingView>
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    // justifyContent: "centre",
    resizeMode: "cover",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 33,
    marginTop: 92,
  },
  input: {
    borderColor: "#E8E8E8",
    borderWidth: 1,
    width: 378,
    height: 50,
    backgroundColor: "#f6f6f6",
    borderRadius: 8,
    // textAlign: "start",
    marginHorizontal: 16,
    color: "#212121",
    paddingLeft: 16,
  },
  form: {
    borderRadius: 25,
    backgroundColor: "#FFF",
    position: "relative"
    // width: 412,
    // height: 549,
    // marginBottom: -120,
    // marginHorizontal: 16,
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
});
