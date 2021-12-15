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
            return "";
        } else {
            this.state.displayItems = blueSearch;
            return this.state.displayItems.length + " results for: " + this.state.search;
        }
    }

    render(){
        return (
            <ScrollView>
                {/* TODO: layout is jank */}
                <View style={styles.container}>
                    <Text style={styles.title}>Happy Browsing:)</Text>
                    <View>
                        <TextInput 
                            ref={input => { this.textInput = input }} 
                            style={styles.formInput} 
                            onChangeText={(val) => {this.state.search = val}} 
                            onSubmitEditing={() => this.search()}
                            placeholder="search" 
                        />
                    </View>
                </View>
                <Text style={styles.searchTitle}>{this.getTitle()}</Text>
                <View style={this.state.search ? {marginVertical: 10} : {marginVertical: 0}} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
        // alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 0
        // alignContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 13,
        paddingLeft: 6,
        paddingRight: 18
    },
    searchTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 30,
        paddingBottom: 0,
        paddingLeft: 6,
        alignSelf: 'center'
    },
    formInput: {
        marginTop: 10,
        width: 140,
        height: 35,
        paddingHorizontal: 10,
        paddingVertical: 0,
        borderRadius: 50,
        backgroundColor: 'white',
        position: 'absolute',
        right: -170,
        textAlign: 'right'
    },
})