import React from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

const ShoppingCartIcon = (props) => (
    <Pressable
        onPress={() => props.navigation.navigate('Cart')}
        style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
        })}>

        <View style={styles.numItems}>
           <Text style={{ color: 'white', fontWeight: 'bold'}}>{props.cartItems.length}</Text>
        </View>
        <Feather
            name="shopping-bag"
            size={25}
            style={{ marginRight: 15 }}
        />
    </Pressable>
)

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}
export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    numItems: {
        position:'absolute',
        height: 20,
        width: 20,
        borderRadius: 15,
        backgroundColor: 'rgba(105, 139, 206,.9)',
        right: 25,
        bottom: 12,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000
    }
})