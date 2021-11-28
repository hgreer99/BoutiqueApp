import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Products from "../components/Products";
import { shoppingItems } from "../Data";
import { connect } from "react-redux";

class BrowsingScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Browsing Cool'
    }

    render(){
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Happy Browsing</Text>
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                </View>
                <View>
                    <Products products={shoppingItems} navigation={this.props.navigation} addToCartAction={this.props.addItemToCart}/>
                </View>
            </ScrollView>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({type: 'ADD_TO_CART', payload: product})
    }
}
export default connect(null, mapDispatchToProps)(BrowsingScreen);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})