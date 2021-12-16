import React, { Component, useState } from "react";
import { StyleSheet, View, Button, Text, Switch } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class WelcomeSizingScreen extends Component {
    constructor(props) {
        super(props);
        // todo: this is hardcoded instead of saved from set up
        this.state = {
          items: [{label: 'XS', value: 'xs'},
                    {label: 'S', value: 's'},
                    {label: 'M', value: 'm'},
                    {label: 'L', value: 'l'},
                    {label: 'XL', value: 'xl'}],
          shoesItems: [{label: '6', value: 'xs'},
                    {label: '7', value: '7'},
                    {label: '8', value: '8'},
                    {label: '9', value: '9'},
                    {label: '10', value: '10'}],
          dressesOpen: false,
          dressesValue: 'm',
          topsOpen: false,
          topsValue: 'm',
          pantsOpen: false,
          pantsValue: 'm',
          shoesOpen: false,
          shoesValue: '8',
        };
        this.setDressesValue = this.setDressesValue.bind(this);
        this.setTopsValue = this.setTopsValue.bind(this);
        this.setPantsValue = this.setPantsValue.bind(this);
        this.setShoesValue = this.setShoesValue.bind(this);
    }

    setDressesOpen(dressesOpen) {
        this.setState({
            dressesOpen
        });
    }
    setTopsOpen(topsOpen) {
        this.setState({
            topsOpen
        });
    }
    setPantsOpen(pantsOpen) {
        this.setState({
            pantsOpen
        });
    }
    setShoesOpen(shoesOpen) {
        this.setState({
            shoesOpen
        });
    }

    setDressesValue(callback) {
        this.setState(state => ({
            dressesValue: callback(state.dressesValue)
        }));
    }
    setTopsValue(callback) {
        this.setState(state => ({
            topsValue: callback(state.topsValue)
        }));
    }
    setPantsValue(callback) {
        this.setState(state => ({
            pantsValue: callback(state.pantsValue)
        }));
    }
    setShoesValue(callback) {
        this.setState(state => ({
            shoesValue: callback(state.shoesValue)
        }));
    }

    setItems(callback) {
        this.setState(state => ({
            items: callback(state.items)
        }));
    }
    setShoeItems(callback){
        this.setState(state => ({
            shoesItems: callback(state.shoeItems)
        }));
    }

    render(){
        // TODO: sizing stuff duplicated and should be moved to a component
        const { items, shoesItems, dressesOpen, dressesValue, topsOpen, topsValue, pantsOpen, pantsValue, shoesOpen, shoesValue } = this.state;
        // TODO: I obviously shouldn't be turning off the error reporting
        console.reportErrorsAsExceptions = false;

        return (
            <KeyboardAwareScrollView 
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <Text style={styles.textBox}>Set your typical clothing sizes below, to make your searches more relevant</Text>
                <View style={styles.toggle}>
                    <Text style={styles.textBox}>Sizing:</Text>
                    <View>
                        <View style={styles.itemSizing}>
                            <Text style={styles.itemSizeTitle}>Dresses:</Text>
                            <DropDownPicker
                                open={dressesOpen}
                                value={dressesValue}
                                items={items}
                                setOpen={(open) => this.setDressesOpen(open)}
                                setValue={(value) => this.setDressesValue(value)}
                                containerStyle={styles.dropdown}
                                dropDownDirection="TOP"
                            />
                        </View>
                        <View style={styles.itemSizing}>
                            <Text style={styles.itemSizeTitle}>Tops:</Text>
                            <DropDownPicker
                                open={topsOpen}
                                value={topsValue}
                                items={items}
                                setOpen={(open) => this.setTopsOpen(open)}
                                setValue={(value) => this.setTopsValue(value)}
                                containerStyle={styles.dropdown}
                                dropDownDirection="TOP"
                            />
                        </View>
                        <View style={styles.itemSizing}>
                            <Text style={styles.itemSizeTitle}>Pants:</Text>
                            <DropDownPicker
                                open={pantsOpen}
                                value={pantsValue}
                                items={items}
                                setOpen={(open) => this.setPantsOpen(open)}
                                setValue={(value) => this.setPantsValue(value)}
                                containerStyle={styles.dropdown}
                                dropDownDirection="TOP"
                            />
                        </View>
                        <View style={styles.itemSizing}>
                            <Text style={styles.itemSizeTitle}>Shoes:</Text>
                            <DropDownPicker
                                open={shoesOpen}
                                value={shoesValue}
                                items={shoesItems}
                                setOpen={(open) => this.setShoesOpen(open)}
                                setValue={(value) => this.setShoesValue(value)}
                                containerStyle={styles.dropdown}
                                dropDownDirection="TOP"
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.continueButton}>
                    <Button style={styles.continue} title="Begin Shopping" onPress={()=>this.props.navigation.navigate('Browse')}/>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}
export default WelcomeSizingScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'rgb(105,188,206)'
    },
    textBox:{
        color: 'white',
        fontSize: 20,
        width: 300,
        marginBottom: 15,
        marginTop: 15,
    }, 
    continueButton:{
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    switch: {
        position: 'relative',
        left: 200,
        top: -40
    },
    itemSizing: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 5,
        alignSelf: 'center'
    },
    itemSizeTitle: {
        fontSize: 20,
        paddingTop: 10,
        paddingRight: 10,
        color: 'white'
    },
    dropdown: {
        width: 70
    }
})