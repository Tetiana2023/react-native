import React from "react";
import { View, Text,  StyleSheet} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';

export const MapScreen = ()=> {
    return (
     
        <View style={styles.container}>
          <MapView style={{flex: 1}} region={{
          ...location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
            <Marker  title="I am here"
            // coordinate={location}
            description="Photo location"/>

          </MapView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
     
       
    }

})