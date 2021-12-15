import React, { Component } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BoutiqueOptions from "../components/BoutiqueOptions";

class WelcomeScreen extends Component {
    render(){
        return (
            <KeyboardAwareScrollView 
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <Text style={styles.textBox}>Welcome!</Text>
                <Text style={styles.textBox}>To get started, enter a few of your favorite boutiques to shop at below:</Text>
                <BoutiqueOptions style={styles.textBox}/>
                <View style={styles.continueButton}>
                    <Button style={styles.continue} title="Continue" onPress={()=>this.props.navigation.navigate('WelcomeDefault')}/>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'rgb(105,188,206)'
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
        bottom: 20,
        right: 20,
        backgroundColor: 'white',
        borderRadius: 5,
    },
})