import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from 'react-redux'
import CartProducts from "../components/CartProducts";

class CartScreen extends Component {

    render() {
        let total = 0;
        this.props.cartItems.forEach(item => {
            total += item.price;
        });
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.title}>Shopping Cart</Text>
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                </View>
                {this.props.cartItems.length > 0 ?
                    <CartProducts
                        removeFromCartAction={this.props.removeItem}
                        products={this.props.cartItems} />
                    : <Text>No items in your cart</Text>
                }
                <View>
                    <Text style={styles.total}>Cart total: ${total}</Text>
                    <Pressable
                        onPress={() => alert("This is where my app ends")}
                        style={styles.checkoutButton}>
                        <Text style={styles.checkoutButtonText}>Checkout</Text>
                    </Pressable>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    total: {
        fontSize: 20,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    checkoutButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#1E447D',
        width: 120,
    },
    checkoutButtonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});