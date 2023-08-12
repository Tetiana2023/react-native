import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export const MapScreen = ({ route }) => {
  const [location, setLocation] = useState(route.params.location);

  useEffect(() => {
    async () => {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        region={{
        ...location,
          longitudeDelta: 0.001,
          latitudeDelta: 0.001,
        }}
        showsUserLocation={true}
      >
       {location && ( <Marker
          title="I am here"
          coordinate={location}
          description="Photo location"
        />)}
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
