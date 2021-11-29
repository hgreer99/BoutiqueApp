import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image
} from "react-native";

class ProductItem extends Component {

    render() {
        const myItem = this.props.product;
        return (
            <View style={styles.item}>
                <Image style={styles.image} source={{uri: myItem.image}} />
                <Text style={styles.title}>{myItem.title}</Text>
                <Text>${myItem.price}</Text>
                <Text>{myItem.store}</Text>
            </View>
        );
    }
}
export default ProductItem;

const styles = StyleSheet.create({
    item: {
        maxWidth: 180,
    },
    image: {
        width: 180,
        height: 210,
    },
    title: {
        fontSize: 16,
    }
});