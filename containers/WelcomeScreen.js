import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class WelcomeScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Button title="Preferences page" onPress={()=>this.props.navigation.navigate('Preferences')}/>
                <Button title="Browsing page" onPress={()=>this.props.navigation.navigate('Browse')}/>
            </View>
        );
    }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
})