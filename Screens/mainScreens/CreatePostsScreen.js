import React from "react";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [photoName, setPhotoName] = useState("");
  const [photoLocation, setPhotoLocation] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status === "granted") {
        setCamera(true);
      }
    })();
  }, []);

  const handleSubmit = () => {
    Keyboard.dismiss();

    // console.log({ photoName, photoLocation });
    navigation.navigate("DefaultScreen", { photo, photoName, photoLocation });

    setPhoto(null);
    setPhotoName("");
    setPhotoLocation("");
  };

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    console.log("location", location);

    setPhoto(photo.uri);
  };
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {photo === null ? (
            <View style={{ borderRadius: 8 }}>
              <Camera style={styles.camera} ref={setCamera}>
                {photo && (
                  <View style={styles.takePhotoContainer}>
                    <Image source={{ uri: photo }} style={styles.prewImg} />
                  </View>
                )}
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={takePhoto}
                >
                  <Ionicons name="camera" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              </Camera>
            </View>
          ) : (
            // (
            //   <View style={styles.prewImg} >
            //     <Text style={{ marginTop: 32, textAlign: "center" }}>Камера не доступна </Text>
            //   </View>
            // )
            <View style={styles.camera}>
              <View style={styles.takePhotoContainer}>
                <Image source={{ uri: photo }} style={styles.prewImg} />
                <TouchableOpacity
                  style={{ ...styles.iconContainer }}
                  onPress={() => setPhoto(null)}
                >
                  <Ionicons name="camera" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          )}
          <TouchableOpacity style={styles.uploadBtn} onPress={pickImage}>
            <Text style={styles.uploadText}>
              {photo === null ? "Завантажте фото" : "Редагувати фото"}
            </Text>
          </TouchableOpacity>
          <View>
            <TextInput
              placeholder="Назва..."
              style={styles.input}
              value={photoName}
              onChangeText={setPhotoName}
            />
            <TextInput
              placeholder="Місцевість..."
              style={styles.input}
              value={photoLocation}
              onChangeText={setPhotoLocation}
            />
            <SimpleLineIcons
              style={styles.iconLocation}
              name="location-pin"
              size={24}
              color="#BDBDBD"
            />

            <TouchableOpacity
              style={styles.submitBtn}
              onPress={handleSubmit}
              activeOpacity={0.8}
            >
              <Text style={styles.submitBtnTitle}>Опублікувати</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: 240,
    width: 380,
    borderRadius: 8,
    // flex: 1,
    // justifyContent: "flex-end",
    // alignItems: "center",
    marginTop: 42,
    marginHorizontal: 16,
  },
  takePhotoContainer: {
    position: "absolute",
    height: 240,
  },
  prewImg: {
    flex: 1,
    width: "100%",
  },

  iconContainer: {
    width: 60,
    height: 60,
    borderColor: "#fff",
    borderRadius: 50,
    borderWidth: 1,
    marginTop: 90,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  uploadBtn: {
    marginLeft: 16,
    marginTop: 8,
    fontSize: 16,
  },
  uploadText: {
    color: "#BDBDBD",
    textDecorationLine: "underline",
  },
  input: {
    position: "relative",
    marginLeft: 44,
    marginTop: 29,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  iconLocation: {
    position: "absolute",
    bottom: 127,
    marginLeft: 14,
  },
  submitBtn: {
    marginRight: 16,
    marginLeft: 16,
    height: 51,
    backgroundColor: "##F6F6F6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 16,
    marginTop: 43,
  },
  submitBtnTitle: {
    color: "#BDBDBD",
    textAlign: "center",
    // font-family: Roboto;
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
  },
});
