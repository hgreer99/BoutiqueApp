import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

// import { createStackNavigator } from 'react-navigation-stack';
// import {createAppContainer } from 'react-navigation';

import BrowsingScreen from "./containers/BrowsingScreen";
import CartScreen from "./containers/CartScreen";
import PreferenceScreen from "./containers/PreferenceScreen";
import ShoppingCartIcon from "./containers/ShoppingCartIcon";
import WelcomeScreen from "./containers/WelcomeScreen";

class ShoppingCart extends Component {
    render(){
        return (
            // <View style={styles.container}>
            //     <Text>Shopping cart</Text>
            // </View>
            <Container/>
        )
    }
}
export default ShoppingCart;

const AppStackNavigator = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen
    },
    Browse: {
        screen: BrowsingScreen
    },
    Preferences: {
        screen: PreferenceScreen
    },
    Cart: {
        screen: CartScreen
    }
}, {
    defaultNavigationOptions:{
        headerTitle: 'Shopping App',
        headerRight:(
            <ShoppingCartIcon/>
        )
    }
})

const Container = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
})