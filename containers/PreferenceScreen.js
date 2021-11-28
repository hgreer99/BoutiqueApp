import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class PreferenceScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Preferences screen</Text>
            </View>
        );
    }
}
export default PreferenceScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
})