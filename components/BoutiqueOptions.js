import React, { Component } from "react";
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    Pressable
} from "react-native";
import { Feather } from '@expo/vector-icons';

class BoutiqueOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
          lastStore: "",
          stores: [],
        };
    }

    createStoreList = () => {
        let myStores = [];
        for (let i = 0; i < this.state.stores.length; i++) {
            let key=this.state.stores[i];
            myStores.push(
                <Text  key={key} style={styles.text}>
                    <View style={styles.storeItem}>
                        <Text style={styles.text}>{this.state.stores[i]}</Text>
                        <Pressable
                            onPress={() => this.removeStore(key)}
                            style={styles.delete}>
                            <Feather
                                name="delete"
                                size={25}
                                style={{ marginRight: 15 }}
                                color='white'
                            />
                        </Pressable>
                    </View>
                </Text>
            );
        }
        return myStores;
    }

    removeStore(val) {
        console.log("removing" + val);
        let index = null;
        for (let i = 0; i < this.state.stores.length; i++) {
            if (val == this.state.stores[i]) {
                index = i;
            }
        }
        if (index != null) {
            this.state.stores.splice(index, 1);
        }
        console.log("stores: ", this.state.stores);
        this.forceUpdate();
    }

    addStore() {
        this.state.stores.push(
            this.state.lastStore
        );
        this.textInput.clear();
        this.forceUpdate();
    }

    render() {
        return (
            <View>
                <View>{this.createStoreList()}</View>
                <View>
                    <TextInput 
                        ref={input => { this.textInput = input }} 
                        style={styles.formInput} 
                        onChangeText={(val) => {this.state.lastStore = val}} 
                        onSubmitEditing={() => this.addStore()}
                        placeholder="store" 
                    />
                </View>
            </View>
        );
    }
}
export default BoutiqueOptions;

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
        backgroundColor: 'white',
    },
    storeItem: {
        width: 250,
    },
    text: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center'
    },
    delete: {
        position: 'absolute',
        right: 0,
        bottom: 0,
    }
});