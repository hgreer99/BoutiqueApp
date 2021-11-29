import React from 'react';
import { Pressable } from "react-native";
import { Feather } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const HamburgerIcon = (props) => (
    <Pressable
        onPress={() => props.navigation.openDrawer()}
        style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
        })}>
        <Feather
            name="menu"
            size={25}
            style={{ marginLeft: 15 }}
        />
    </Pressable>
)

export default withNavigation(HamburgerIcon);
