import React, { Component } from "react";
import { ScrollView, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import FilterBoutiqueOptions from "../components/FilterBoutiqueOptions";

class FilterScreen extends Component {
    // TODO: learn about set state so I don't have to duplicate everything
    // TODO: items are actually just the sizes
    constructor(props) {
        super(props);
        // todo: this is hardcoded instead of saved from set up
        this.state = {
          stores: ["shopStevie.com", "roolee.com"],
          outOfStockEnabled: false,
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
          dressesValue: 's',
          topsOpen: false,
          topsValue: 'm',
          pantsOpen: false,
          pantsValue: 's',
          shoesOpen: false,
          shoesValue: '8',
        };
        this.setDressesValue = this.setDressesValue.bind(this);
        this.setTopsValue = this.setTopsValue.bind(this);
        this.setPantsValue = this.setPantsValue.bind(this);
        this.setShoesValue = this.setShoesValue.bind(this);
    }

    toggleSwitch = (newSelection) => {
        console.log("toggling switch", this.state.outOfStockEnabled);
        this.state.outOfStockEnabled = newSelection;
        console.log("Toggle has been switched: ", this.state.outOfStockEnabled);
        this.forceUpdate();
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
        const { items, shoesItems, dressesOpen, dressesValue, topsOpen, topsValue, pantsOpen, pantsValue, shoesOpen, shoesValue } = this.state;
        // TODO: I obviously shouldn't be turning off the error reporting
        console.reportErrorsAsExceptions = false;
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Quick Filters</Text>
                <Text>Easily configure your current shopping experience here</Text>
                <View>
                    <Text style={styles.title}>Your current shops:</Text>
                    <FilterBoutiqueOptions style={styles.textBox} stores={this.state.stores}/>
                </View>
                <View style={styles.toggle}>
                    <Text style={styles.title}>Show out of stock:</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: "rgba(129, 216, 235,.8)", true: "rgba(129, 216, 235,.8)" }}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={(newSelection) => this.toggleSwitch(newSelection)}
                        value={this.state.outOfStockEnabled}
                    />
                </View>
                <View>
                    <Text style={styles.title}>Preferred Sizing:</Text>
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
            </ScrollView>
        );
    }
}
export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 15,
    paddingTop: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  formInput: {
    marginTop: 10,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: 'rgba(129, 216, 235,.8)',
  },
  groupInput: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  groupFormInput: {
    marginTop: 10,
    width: 145,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: 'rgba(129, 216, 235,.8)',
  },
  textBox:{
    fontSize: 20,
    width: 300,
    marginBottom: 15,
    marginTop: 15,
  },
  switch: {
      alignSelf: 'center'
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
      paddingRight: 10
  },
  dropdown: {
      width: 70
  }
});


// COLOR PALLETTE:
// Dark bluish: rgb(45, 123, 150)
// Main blue: rgba(129, 216, 235,.8)
// buttons blue: rgb(49, 151, 173)

// figma
// headers: rgb(105,188,206)->complementary color rgb(67, 171, 193)->purplish for cart count rgba(105, 139, 206,.8)
// rgb(79, 188, 227)