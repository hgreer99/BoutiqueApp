import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class BoutiqueOptions extends Component {
    render() {
        return (
            <View>
                <TextInput style={styles.formInput}
                    placeholder="store" 
                />
            </View>
        );
    }
}
export default BoutiqueOptions;

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        // alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'rgb(79, 188, 227)'
    },
    formInput: {
        marginTop: 10,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: 'white',
      },
    
});