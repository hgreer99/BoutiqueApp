import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import PreferenceScreen from "../containers/PreferenceScreen";
import ShoppingCartIcon from "../containers/ShoppingCartIcon";
import { StyleSheet } from "react-native";
import HamburgerIcon from "../containers/HamburgerIcon";


const PreferencesStack = createStackNavigator({
    Preferences: {
        screen: PreferenceScreen,
    },
}, {
    defaultNavigationOptions: {
        headerTitle: 'Shopping App',
        headerStyle: {
            backgroundColor: '#eee',
            height: 60
        },
        headerRight:(()=>
            <ShoppingCartIcon/>
        ), 
        headerLeft:(()=>
            <HamburgerIcon/>
        )
    }
})

export default PreferencesStack;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: 16
    }
})