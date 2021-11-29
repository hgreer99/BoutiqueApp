import React, { Component } from "react";
import { StyleSheet, ScrollView, Image, Pressable, Text, View } from 'react-native';

class ItemScreen extends Component {
    render() {
        const { params } = this.props.navigation.state;
        const item = params ? params.item : null;
        const addToCartAction = params ? params.addToCartAction : null;

        return (
            <ScrollView>
                <Text style={styles.title}>{item.title}</Text>
                <Image style={styles.image} source={{uri: item.image}} />
                <View style={styles.itemDescriptionText}>
                    <Text style={styles.text}>${item.price}</Text>
                    <Text style={styles.text}>This would be a description on sizing or whatever they like here</Text>
                    <Text style={styles.text}>{item.store}</Text>
                </View>
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
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    itemDescriptionText: {
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 60
    },
    text: {
        fontSize: 18,
    },
    addToCart: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
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