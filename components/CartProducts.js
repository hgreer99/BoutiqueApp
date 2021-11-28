import React, { Component } from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import CartProductItem from "./CartProductItem";

class CartProducts extends Component {

    renderProducts = (products) => {                
        return products.map((item, index) => {
            return (
                <View key={index}>
                    <CartProductItem product={item} removeFromCartAction={() => this.props.removeFromCartAction(item)}/>
                </View>
            )
        })
    }

    render() {
        return (
            <View style={styles.itemsContainer}>
                {this.renderProducts(this.props.products)}
            </View>
        );
    }
}
export default CartProducts;

const styles = StyleSheet.create({
    itemsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: 400,
        justifyContent: 'space-around'
    }
});