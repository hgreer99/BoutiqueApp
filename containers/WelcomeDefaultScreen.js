import React, { Component } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class WelcomeDefaultScreen extends Component {
    render(){
        return (
            <KeyboardAwareScrollView 
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <Text style={styles.textBox}>Would you like to view items even when they are out of stock?</Text>
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
    skipButton:{
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'white',
        borderRadius: 5,
    }
})