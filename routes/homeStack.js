import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import BrowsingScreen from "../containers/BrowsingScreen"
import CartScreen from "../containers/CartScreen";
import HamburgerIcon from "../containers/HamburgerIcon";
import ItemScreen from "../containers/ItemScreen";
import ShoppingCartIcon from "../containers/ShoppingCartIcon";
import WelcomeScreen from "../containers/WelcomeScreen";

const HomeStack = createStackNavigator({
    Browse: {
        screen: BrowsingScreen
    },
    Welcome: {
        screen: WelcomeScreen
    },
    Cart: {
        screen: CartScreen
    },
    ItemScreen: {
        screen: ItemScreen
    }
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

export default HomeStack;
