import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable
} from "react-native";
import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

class CartProductItem extends Component {

    render() {
        const myItem = this.props.product;
        return (
            <View style={styles.item}>
                <Image style={styles.image} source={{uri: myItem.image}} />
                <View style={styles.cartText}>
                    <Text style={styles.title}>{myItem.title}</Text>
                    <Text>${myItem.price}</Text>
                    <Text>{myItem.store}</Text>
                </View>
                <Pressable
                    onPress={() => this.props.removeFromCartAction(myItem)}
                    style={styles.trash}>
                    <Feather
                        name="trash-2"
                        size={25}
                        style={{ marginRight: 15 }}
                    />
                </Pressable>
            </View>
        );
    }
}
export default CartProductItem;

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-between',
        width: (Dimensions.get('window').width),
        marginBottom: 10
    },
    image: {
        margin: 5,
        width: 100,
        height: 150,
    },
    title: {
        fontSize: 16,
    },
    cartText: {
        display: 'flex',
        flexDirection: 'column'
    },
    trash: {
        position: 'absolute',
        right: 0,
        bottom: 5,
    }
});