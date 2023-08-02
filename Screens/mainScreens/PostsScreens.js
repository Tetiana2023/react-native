import React from "react";
import { View, Text,  StyleSheet} from "react-native";

export const PostsScreens = ()=> {
    return (
        <View styles={styles.container}>
            <Text> PostsScreens</Text>
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