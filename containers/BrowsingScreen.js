import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Products from "../components/Products";
import { shoppingItems } from "../Data";
import { connect } from "react-redux";

class BrowsingScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Browsing Cool'
    }

    render(){
        return (
            <View style={styles.container}>
                <Products products={shoppingItems} onPress={this.props.addItemToCart}/>
            </View>
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
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
})