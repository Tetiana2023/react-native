import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform
} from "react-native";

export default function App() {
  console.log(Platform.OS)
  const image = {
    uri: "https://faktypro.com.ua/uploads/img/11-cikavih-faktiv-pro-gori.jpg",
  };
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image}>
        <View style={styles.form}>
          <Text style={styles.text}>Реєстрація</Text>
          <TextInput style={styles.input} placeholder="Логін" />
          <View style={{ marginTop: 16, marginBottom: 16 }}>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            secureTextEntry={true}
          />
          <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text style={styles.btnTitle}>Зареєструватися</Text>
          </TouchableOpacity>
          <Text style={styles.finishText}>Вже є акаунт? Увійти</Text>
        </View>
        <StatusBar style="auto" />
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
    justifyContent: 'flex-end',
    resizeMode: "cover",
    // alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 33,
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
    width: 412,
    height: 549,
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
    color: '#1B4371',
    marginTop: 16,
textAlign: 'center',
// font-family: Roboto;
fontSize: 16,
fontStyle: 'normal',
fontWeight: 400,
// line-height: normal;
  }
});
