import React, {useEffect} from "react";
import { View, Text,  StyleSheet} from "react-native";
import MapView, {Marker} from 'react-native-maps';
// import * as Location from 'expo-location';

export const MapScreen = (route)=> {
    // const [location, setLocation] = useState(route.params.location)
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
          <MapView style={{flex: 1}} initialRegion={{longitude:58.516339 , latitude: 38.682185 , longitudeDelta: 0.006, latitudeDelta: 0.001 }}
        //   region={{
        //   ...location,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
        >
            <Marker  title="I am here" coordinate={{longitude:58.516339 , latitude: 38.682185 }}
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