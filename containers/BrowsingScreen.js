import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import Products from "../components/Products";
import { shoppingItems, blueSearch } from "../Data";
import { connect } from "react-redux";

class BrowsingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          search: "",
          displayItems: shoppingItems,
        };
    }

    search() {
        console.log(this.state.search);
        this.textInput.clear();
        this.forceUpdate();
    }

    getTitle = () => {
        if (this.state.search == "") {
            return "Happy Browsing";
        } else {
            this.state.displayItems = blueSearch;
            return this.state.displayItems.length + " results for: " + this.state.search;
        }
    }

    render(){
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>{this.getTitle()}</Text>
                    <View>
                        <TextInput 
                            ref={input => { this.textInput = input }} 
                            style={styles.formInput} 
                            onChangeText={(val) => {this.state.search = val}} 
                            onSubmitEditing={() => this.search()}
                            placeholder="search" 
                        />
                    </View>
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                </View>
                <View>
                    <Products products={this.state.displayItems} navigation={this.props.navigation} addToCartAction={this.props.addItemToCart}/>
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
    formInput: {
        marginTop: 10,
        width: 170,
        height: 40,
        paddingHorizontal: 10,
        paddingVertical: 0,
        borderRadius: 50,
        backgroundColor: 'white',
        position: 'absolute',
        right: -180,
        textAlign: 'right'
    },
})