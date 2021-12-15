import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text
} from "react-native";
import { Checkbox } from 'react-native-paper';

//TODO: this is very similar to preferencesBoutiqueOptions.js with different styles

class FilterBoutiqueOptions extends Component {
    constructor(props) {
        super(props);
        let isSelected = [];
        for (let i = 0; i < props.stores.length; i++) {
            isSelected[i] = true;
        }
        this.state = {
          stores: props.stores ? props.stores : [],
          storesIsSelected: isSelected,
        };
        console.log("this.state.storesIsSelected", this.state.stores, this.state.storesIsSelected);
    }

    setChecked = (newSelection, i) => {
        this.state.storesIsSelected[i] = newSelection;
        console.log("storesIsSelected", this.state.storesIsSelected[i]);
        this.forceUpdate();
    }

    createStoreList = () => {
        let myStores = [];
        for (let i = 0; i < this.state.stores.length; i++) {
            let key=this.state.stores[i];
            let selection = this.state.storesIsSelected[i];
            console.log("selection:", selection);
            myStores.push(
                <Text  key={key} style={styles.text}>
                    <View style={styles.storeItem}>
                        <Checkbox.Android
                            style={styles.checkbox}
                            status={selection ? 'checked' : 'unchecked'}
                            onPress={() => {this.setChecked(!selection, i)}}
                            color={'rgb(45, 123, 150)'}
                            uncheckColor={'red'}
                        />
                        <Text style={styles.text}>{this.state.stores[i]}</Text>
                    </View>
                </Text>
            );
        }
        return myStores;
    }

    render() {
        return (
            <View>{this.createStoreList()}</View>
        );
    }
}
export default FilterBoutiqueOptions;

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        // alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'rgb(79, 188, 227)'
    },
    formInput: {
        marginTop: 10,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: 'rgba(129, 216, 235,.8)',
    },
    storeItem: {
        display: 'flex',
        flexDirection: 'row',
        // width: 250,
    },
    text: {
        color: 'rgb(17, 112, 133)',
        fontSize: 20,
        alignSelf: 'center'
    },
});