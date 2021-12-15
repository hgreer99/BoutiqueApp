import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import BrowsingScreen from "../containers/BrowsingScreen"
import CartScreen from "../containers/CartScreen";
import HamburgerIcon from "../containers/HamburgerIcon";
import ItemScreen from "../containers/ItemScreen";
import ShoppingCartIcon from "../containers/ShoppingCartIcon";
import WelcomeScreen from "../containers/WelcomeScreen";
import WelcomeDefaultScreen from "../containers/WelcomeDefaultScreen";

const HomeStack = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    WelcomeDefault: {
        screen: WelcomeDefaultScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Browse: {
        screen: BrowsingScreen,
    },
    Cart: {
        screen: CartScreen,
    },
    ItemScreen: {
        screen: ItemScreen,
    }
}, {
    defaultNavigationOptions: {
        headerTitle: 'Boutique Shopper',
        headerStyle: {
            backgroundColor: 'rgb(105,188,206)',
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
