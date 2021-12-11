import React, { Component } from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import Navigator from "./routes/drawer";
import HomeStack from "./routes/homeStack";
import PreferencesStack from "./routes/preferencesStack";

const Drawer = createDrawerNavigator();

class ShoppingCart extends Component {
    render(){
        return (
            // <Drawer.Navigator initialRouteName="Home" drawerContent={props => {
            //     return (
            //       <DrawerContentScrollView {...props}>
            //         <DrawerItemList {...props} />
            //         <DrawerItem label="Logout" onPress={() => props.navigation.navigate("Login")} />
            //       </DrawerContentScrollView>
            //     )
            //   }}>
            //     <Drawer.Screen name="Home" component={Home}/>
            //     <Drawer.Screen name="New Project" component={NewProject} />
            // </Drawer.Navigator>
            <Navigator/>
            // Home: {
            //     screen: HomeStack,
            // },
            // Preferences: {
            //     screen: PreferencesStack,
            // },
        )
    }
}
export default ShoppingCart;
