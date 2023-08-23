import React from "react";
import { View, Text,  StyleSheet, TouchableOpacity} from "react-native";
import {useDispatch} from 'react-redux';
import {authSignOutUser} from '../../redux1/auth/authOperations';

export const ProfileScreen = ()=> {
    const dispatch = useDispatch();
const signOut = ( )=> {
dispatch(authSignOutUser())
}

    return (
     
        <View style={styles.container}>
            <Text> ProfileScreen</Text>
           < TouchableOpacity onPress={signOut}> log out</TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }

})