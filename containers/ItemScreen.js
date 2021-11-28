import React, { Component } from "react";
import { StyleSheet, ScrollView, Image, Pressable, Text } from 'react-native';

class ItemScreen extends Component {
    render() {
        const { params } = this.props.navigation.state;
        const item = params ? params.item : null;
        const addToCartAction = params ? params.addToCartAction : null;

        return (
            <ScrollView>
                <Text style={styles.title}>{item.title}</Text>
                <Image style={styles.image} source={{uri: item.image}} />
                <Text>${item.price}</Text>
                <Text>{item.store}</Text>
                <Pressable
                    onPress={() => addToCartAction(item)}
                    style={styles.addToCart}>
                    <Text style={styles.addToCartText}>Add To Cart</Text>
                </Pressable>
            </ScrollView>
        );
    }
}
export default ItemScreen;

const styles = StyleSheet.create({
    item: {
        // maxWidth: 350,
    },
    image: {
        width: 355,
        height: 600,
        margin: 10,
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
    },
    addToCart: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        // paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#1E447D',
        width: 120,
    },
    addToCartText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});