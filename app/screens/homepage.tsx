import React from "react";
import { StyleSheet, View, Text } from "react-native";


export default function SignIn() {

    return (
        <View style={styles.container}>
            <Text>Welcome to the homepage!!!</Text>
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }
});
