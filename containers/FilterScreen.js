import React, { Component } from "react";
import { ScrollView, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import FilterBoutiqueOptions from "../components/FilterBoutiqueOptions";

class FilterScreen extends Component {
    constructor(props) {
        super(props);
        // todo: this is hardcoded instead of saved from set up
        this.state = {
          stores: ["shopStevie.com", "lucyAvenue.com"],
          outOfStockEnabled: true,
        };
    }

    toggleSwitch = (newSelection) => {
        console.log("toggling switch", this.state.outOfStockEnabled);
        this.state.outOfStockEnabled = newSelection;
        console.log("Toggle has been switched: ", this.state.outOfStockEnabled);
        this.forceUpdate();
    }

    render(){
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Quick Filters</Text>
                <Text>Easily configure your current shopping experience here</Text>
                <View>
                    <Text style={styles.title}>Edit your current shops</Text>
                    <FilterBoutiqueOptions style={styles.textBox} stores={this.state.stores}/>
                </View>
                <View style={styles.toggle}>
                    <Text style={styles.title}>Show out of stock:</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: "rgba(129, 216, 235,.8)", true: "rgba(129, 216, 235,.8)" }}
                        // thumbColor={this.state.outOfStockEnabled ? "rgb(227, 244, 250)" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={(newSelection) => this.toggleSwitch(newSelection)}
                        value={this.state.outOfStockEnabled}
                    />
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
    paddingVertical: 15
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
  }
});


// COLOR PALLETTE:
// Dark bluish: rgb(45, 123, 150)
// Main blue: rgba(129, 216, 235,.8)
// buttons blue: rgb(49, 151, 173)

// figma
// headers: rgb(105,188,206)->complementary color rgb(67, 171, 193)->purplish for cart count rgba(105, 139, 206,.8)
// rgb(79, 188, 227)