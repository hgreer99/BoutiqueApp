import React, { Component, useState } from "react";
import { StyleSheet, View, Button, Text, Switch } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class WelcomeDefaultScreen extends Component {
    constructor(props) {
        super(props);
        this.isEnabled = false;
    }

    render(){
        const toggleSwitch = () => {
            console.log("toggling switch", this.isEnabled);
            this.isEnabled = !this.isEnabled;
            console.log("Toggle has been switched: ", this.isEnabled);
            this.forceUpdate();
        }
        return (
            <KeyboardAwareScrollView 
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <Text style={styles.textBox}>Would you like to view items even when they are out of stock?</Text>
                <View style={styles.toggle}>
                    <Text style={styles.textBox}>Show out of stock:</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: "rgb(45, 123, 150)", true: "rgb(45, 123, 150)" }}
                        thumbColor={this.isEnabled ? "rgb(227, 244, 250)" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={this.isEnabled}
                    />

                </View>
                <View style={styles.continueButton}>
                    <Button style={styles.continue} title="Begin Shopping" onPress={()=>this.props.navigation.navigate('Browse')}/>
                </View>
                <View style={styles.skipButton}>
                    <Button style={styles.skip} title="Skip" onPress={()=>this.props.navigation.navigate('Browse')}/>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}
export default WelcomeDefaultScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'rgb(79, 188, 227)'
    },
    textBox:{
        color: 'white',
        fontSize: 20,
        width: 300,
        marginBottom: 15,
        marginTop: 15,
    }, 
    continueButton:{
        position: 'absolute',
        bottom: 65,
        right: 20,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    skipButton:{
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    // toggle: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center'
    // },
    switch: {
        position: 'relative',
        // bottom: -15,
        left: 200,
        top: -40
    }
})