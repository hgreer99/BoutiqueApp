import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import PreferencesBoutiqueOptions from "../components/PreferencesBoutiqueOptions";

class PreferenceScreen extends Component {
    constructor(props) {
        super(props);
        // todo: this is hardcoded instead of saved where it should be
        this.state = {
          stores: ["shopStevie.com", "lucyAvenue.com"],
        };
    }

    render(){
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Account Info</Text>
                <Text>This information can be configured here, or upon your first purchase.</Text>
                <Text style={styles.title}>Preferred Shipping Address</Text>
                <View>
                    <View style={styles.groupInput}>
                        <TextInput
                            style={styles.groupFormInput} 
                            placeholder="First name" 
                        />
                        <TextInput 
                            style={styles.groupFormInput} 
                            placeholder="Last name" 
                        />
                    </View>
                    
                    <TextInput 
                        style={styles.formInput} 
                        placeholder="Address" 
                    />
                    <TextInput 
                        style={styles.formInput} 
                        placeholder="Apartment, suite, etc. (optional)" 
                    />
                    <View style={styles.groupInput}>
                        <TextInput
                            style={styles.groupFormInput} 
                            placeholder="City" 
                        />
                        <TextInput 
                            style={styles.groupFormInput} 
                            placeholder="Country/Region" 
                        />
                    </View>
                    <View style={styles.groupInput}>
                        <TextInput
                            style={styles.groupFormInput} 
                            placeholder="State" 
                        />
                        <TextInput 
                            style={styles.groupFormInput} 
                            placeholder="Zip Code" 
                        />
                    </View>
                </View>
                <Text style={styles.title}>Preferred Payment Info</Text>
                <View>
                    <TextInput 
                        style={styles.formInput} 
                        placeholder="Card number" 
                    />
                    <TextInput 
                        style={styles.formInput} 
                        placeholder="Name on card" 
                    />
                    <View style={styles.groupInput}>
                        <TextInput
                            style={styles.groupFormInput} 
                            placeholder="Expiration(MM/YY)" 
                        />
                        <TextInput 
                            style={styles.groupFormInput} 
                            placeholder="Security Code" 
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Edit shops</Text>
                    <Text>These are the shops you will be able to browse and search</Text>
                    <PreferencesBoutiqueOptions style={styles.textBox} stores={this.state.stores}/>
                </View>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            </ScrollView>
        );
    }
}
export default PreferenceScreen;

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
    height: 35,
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
    height: 35,
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
});
