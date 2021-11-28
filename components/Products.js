import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Pressable
} from "react-native";
import ProductItem from "./ProductItem";

class Products extends Component {

    renderProducts = (products) => {                
        return products.map((item, index) => {
            return (
                <View key={index}>
                    <Pressable onPress={()=> this.props.navigation.navigate('ItemScreen', {item: item, addToCartAction:() => this.props.addToCartAction(item)})}>
                        <ProductItem product={item} addToCartAction={() => this.props.addToCartAction(item)}/>
                    </Pressable>
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
export default Products;

const styles = StyleSheet.create({
    itemsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: 400,
        justifyContent: 'space-around'
    }
});