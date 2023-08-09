import React from "react";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from '@expo/vector-icons'; 

export const CreatePostsScreen = ({navigation}) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [photoName, setPhotoName] = useState("");
  const [photoLocation, setPhotoLocation]= useState('');

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
 navigation.navigate("DefaultScreen", {photo})

    setPhotoName("");
    setPhotoLocation("");
   
 };
 const keyboardHide = () => {
    Keyboard.dismiss();
 };

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();

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
    <TouchableWithoutFeedback onPress={keyboardHide}>
 <View style={styles.container}>
      {camera ? (
        <View style={{borderRadius: 8}}>
          <Camera style={styles.camera} ref={setCamera}>
            <View style={styles.takePhotoContainer}>
              {photo && (
                <Image source={{ uri: photo }} style={styles.prewImg} />
              )}
            </View>

            {!photo && (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={takePhoto}
              >
                <Ionicons name="camera" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            )}
          </Camera>
        </View>
      ) : (
        <Text>Камера не доступна </Text>
      )}
      <TouchableOpacity style={styles.uploadBtn} onPress={pickImage}>
        <Text style={styles.uploadText}>Завантажте фото</Text>
      </TouchableOpacity>
      <View>
        <TextInput
          plaseholder="Назва..."
          style={styles.input}
          value={photoName}
          onChangeText={(value) => {
            setPhotoName(value);
          }}
        />
            <TextInput
          plaseholder="Місцевість..."
          style={styles.input}
          value={photoLocation}
          onChangeText={(value) => {
            setPhotoLocation(value);
          }}
        />
        <SimpleLineIcons  style={styles.iconLocation}
        name="location-pin" size={24} color="#BDBDBD" />

        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit} activeOpacity={0.8}>
            <Text style={styles.submitBtnTitle}>Опублікувати</Text>
        </TouchableOpacity>
      </View>
    </View>
    </TouchableWithoutFeedback>
   
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
 submitBtn:{
    marginRight: 16,
    marginLeft: 16,
    height: 51,
    backgroundColor: "#FF6C00",
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


 }
});
